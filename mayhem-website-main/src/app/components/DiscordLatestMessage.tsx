"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdownComponents = {
  h1: ({ node, ...props }: any) => (
    <h1 className="text-4xl orbitron-900 font-bold" {...props} />
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-3xl orbitron-800 font-bold" {...props} />
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-2xl font-bold montserrat-600 mt-3" {...props} />
  ),
  h4: ({ node, ...props }: any) => (
    <h4 className="text-xl my-2 mt-3" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="leading-relaxed" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="ml-6 list-disc" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="ml-6 list-decimal" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="ml-2" {...props} />
  ),
  a: ({ node, ...props }: any) => (
    <a className="text-blue-500 bg-amber-200/10 rounded-sm" {...props} />
  ),
  blockquote: ({ node, ...props }: any) => (
    <div>
      <blockquote
        className="border-l-4 border-blue-500 rounded-sm pl-4"
        {...props}
      />
    </div>
  ),
  code: ({ node, inline, ...props }: any) =>
    inline ? (
      <code className="px-1 py-0.5 rounded bg-slate-900 text-gray-200" {...props} />
    ) : (
      <pre className="bg-gray-950 m-4 p-4 rounded-md text-gray-300 text-wrap jetbrains-mono">
        <code {...props} />
      </pre>
    ),
};

export function DiscordLatestMessage({ channelId }: { channelId: string }) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [message, setMessage] = React.useState<any>(null);

  React.useEffect(() => {
    if (!channelId) return;
    setLoading(true);
    setError(null);
    fetch(`/api/discord/latest?channelId=${encodeURIComponent(channelId)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d?.error) setError(d.error);
        else setMessage(d);
      })
      .catch((e) => setError(String(e?.message ?? e)))
      .finally(() => setLoading(false));
  }, [channelId]);

  if (loading) return <><div className="loader-circle" />Loading news...<style>{`
        .loader-circle {
          width: 30px;
          height: 30px;
          border: 4px solid #222222;
          border-top-color: #2222ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style></>;
  if (error) return <div className="text-red-400">Error: {error}</div>;
  if (!message) return <div>No messages.</div>;
  if (message.content?.toLowerCase().includes("@everyone")) return (
    <div className="border-l-blue-400 border-l-3 rounded p-5 bg-amber-200/10">
      <div className="text-sm text-gray-400 mb-2">
        Latest by {message.author?.tag} •{" "}
        {new Date(message.timestamp).toLocaleString()}
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {message.content ?? ""}
      </ReactMarkdown>
    </div>
  );



  return (
    <div>
      <div className="text-sm text-gray-400 mb-2">
        Latest by {message.author?.tag} •{" "}
        {new Date(message.timestamp).toLocaleString()}
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {message.content ?? ""}
      </ReactMarkdown>
    </div>
  );
}

export default DiscordLatestMessage;
