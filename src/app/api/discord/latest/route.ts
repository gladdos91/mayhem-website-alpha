import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const channelId = url.searchParams.get("channelId");
        if (!channelId) {
            return NextResponse.json({ error: "channelId query parameter required" }, { status: 400 });
        }

        const token = process.env.TOKEN;
        const guildId = process.env.GUILDID;
        if (!token) {
            return NextResponse.json({ error: "TOKEN not configured on server" }, { status: 500 });
        }

        const headers = {
            Authorization: `Bot ${token}`,
            "User-Agent": "MayhemWebsite/1.0 (+contact@mayhem.example)",
        };

        // Fetch recent messages from Discord REST API
        const discordRes = await fetch(
            `https://discord.com/api/v10/channels/${encodeURIComponent(channelId)}/messages?limit=50`,
            { headers }
        );

        if (!discordRes.ok) {
            const text = await discordRes.text();
            return NextResponse.json({ error: "Discord API error", details: text }, { status: discordRes.status });
        }

        const messages = await discordRes.json();
        if (!Array.isArray(messages)) {
            return NextResponse.json({ error: "Unexpected response from Discord API" }, { status: 502 });
        }

        // Find latest non-bot message
        const latest = messages.find((m: any) => !(m.author && m.author.bot));

        if (!latest) {
            return NextResponse.json({ error: "No user messages found in this channel" }, { status: 404 });
        }

        let processedContent: string = latest.content ?? "";

        //
        // 1) User mentions: <@123> / <@!123>  ->  [@Username](https://discord.com/users/123)
        //
        processedContent = processedContent.replace(/<@!?(\d+)>/g, (match, userId) => {
            const user = latest.mentions?.find((m: any) => m.id === userId);
            if (!user) return match;

            const username = user.global_name || user.username;
            return `[@${username}](https://discord.com/users/${userId})`;
        });

        //
        // 2) Role mentions: <@&123> -> @RoleName
        //
        const roleMentionMatches = [...processedContent.matchAll(/<@&(\d+)>/g)];
        let roleNameMap: Record<string, string> = {};

        if (roleMentionMatches.length && guildId) {
            try {
                const rolesRes = await fetch(
                    `https://discord.com/api/v10/guilds/${encodeURIComponent(guildId)}/roles`,
                    { headers }
                );

                if (rolesRes.ok) {
                    const roles = await rolesRes.json();
                    if (Array.isArray(roles)) {
                        for (const r of roles) {
                            if (r.id && r.name) {
                                roleNameMap[r.id] = r.name;
                            }
                        }
                    }
                }
            } catch {
                // If this fails, we'll just leave the original mention text.
            }
        }

        processedContent = processedContent.replace(/<@&(\d+)>/g, (match, roleId) => {
            const name = roleNameMap[roleId];
            return name ? `@${name}` : match;
        });

        //
        // 3) Channel / Forum / Thread mentions AND raw Discord URLs
        //

        // <#123> mentions
        const channelMentionMatches = [...processedContent.matchAll(/<#(\d+)>/g)];
        const mentionChannelIds = channelMentionMatches.map((m) => m[1]);

        // Raw Discord URLs: https://discord.com/channels/<guildOr@me>/<channelId>/<messageId?>
        const discordUrlRegex =
            /https?:\/\/(?:ptb\.|canary\.)?discord\.com\/channels\/(?:\d+|@me)\/(\d+)(?:\/\d+)?/g;
        const urlChannelMatches = [...processedContent.matchAll(discordUrlRegex)];
        const urlChannelIds = urlChannelMatches.map((m) => m[1]);

        const uniqueChannelIds = Array.from(new Set([...mentionChannelIds, ...urlChannelIds]));

        type ChannelInfo = { name: string; type: number | null };
        const channelInfoMap: Record<string, ChannelInfo> = {};

        if (uniqueChannelIds.length) {
            await Promise.all(
                uniqueChannelIds.map(async (cId) => {
                    try {
                        const res = await fetch(
                            `https://discord.com/api/v10/channels/${encodeURIComponent(cId)}`,
                            { headers }
                        );
                        if (res.ok) {
                            const data = await res.json();
                            if (data?.name) {
                                channelInfoMap[cId] = {
                                    name: data.name,
                                    type: typeof data.type === "number" ? data.type : null,
                                };
                            }
                        }
                    } catch {
                        // ignore
                    }
                })
            );
        }

        // Helper format
        const formatChannelLabel = (info: ChannelInfo | undefined) => {
            if (!info) return "#unknown";

            const isThread = [10, 11, 12].includes(info.type ?? -1);
            if (isThread) return `🧵 ${info.name}`;
            return `#${info.name}`;
        };

        // Replace <#123>
        processedContent = processedContent.replace(/<#(\d+)>/g, (match, cId) => {
            const label = formatChannelLabel(channelInfoMap[cId]);

            const base = guildId
                ? `https://discord.com/channels/${guildId}/${cId}`
                : `https://discord.com/channels/${cId}`;

            return `[${label}](${base})`;
        });

        // Replace raw Discord URLs
        processedContent = processedContent.replace(discordUrlRegex, (match, cId) => {
            const label = formatChannelLabel(channelInfoMap[cId]);
            // Keep full original URL (it may contain messageId)
            return `[${label}](${match})`;
        });


        // Return minimal safe payload
        return NextResponse.json({
            id: latest.id,
            content: processedContent,
            author: {
                id: latest.author.id,
                username: latest.author.username,
                discriminator: latest.author.discriminator,
                tag: `${latest.author.username}#${latest.author.discriminator}`,
                avatar: latest.author.avatar
                    ? `https://cdn.discordapp.com/avatars/${latest.author.id}/${latest.author.avatar}.png`
                    : null,
            },
            timestamp: latest.timestamp,
            raw: latest,
        });
    } catch (err: any) {
        return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
    }
}
