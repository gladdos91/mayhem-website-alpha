import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface EditableProps {
  path: string;
}

export function Editable({ path }: EditableProps) {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await fetch(path.replace("/public", ""));
        if (!res.ok) {
          throw new Error(`Error Loading Content: ${res.statusText}`);
        }
        const text = await res.text();
        setContent(text);
      } catch (error) {
        setContent(
          '<h2 class="text-center text-2xl text-rose-500">Error Loading Content!</h2>'
        );
      }
    }
    loadContent();
  }, [path]);

  // Define custom components with Tailwind classes
  const components = {
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
      <h3 className="text-xl my-2 mt-3" {...props} />
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
      <a className="text-blue-500" {...props} />
    ),
    blockquote: ({ node, ...props }: any) => (
      <div>
        <blockquote className="border-l-4 border-blue-500 rounded-sm pl-4 " {...props} />

      </div>
    ),
    code: ({ node, ...props }: any) => (
      <div className="bg-gray-950 m-4 p-4 rounded-md text-gray-300 text-wrap jetbrains-mono" {...props} />
    )
  };

  return content ? (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
      }}
    >
      <div className="loader-circle" />
      <style>{`
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
      `}</style>
    </div>
  );
}
