import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <section className="mt-8 space-y-4">
      <ReactMarkdown
        // className="prose prose-lg prose-blue max-w-none"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ node, ...props }) => <h1 className="mb-4 text-4xl font-bold" {...props} />,
          h2: ({ node, ...props }) => <h2 className="mb-3 text-3xl font-semibold" {...props} />,
          h3: ({ node, ...props }) => <h3 className="mb-2 text-2xl font-semibold" {...props} />,
          h4: ({ node, ...props }) => <h4 className="mb-2 text-xl font-medium" {...props} />,
          h5: ({ node, ...props }) => <h5 className="mb-2 text-lg font-medium" {...props} />,
          h6: ({ node, ...props }) => <h6 className="mb-2 text-base font-medium" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: ({ node, ...props }) => <ul className="mb-4 list-disc space-y-1 pl-6" {...props} />,
          ol: ({ node, ...props }) => <ol className="mb-4 list-decimal space-y-1 pl-6" {...props} />,
          li: ({ node, ...props }) => <li className="ml-2" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="my-4 border-l-4 border-gray-400 pl-4 italic text-gray-600" {...props} />
          ),

          code({ className, children, ...props }) {
            return (
              <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-gray-100">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },

          pre: ({ node, ...props }) => (
            <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-gray-100" {...props} />
          ),
          strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          hr: ({ node, ...props }) => <hr className="my-6 border-t border-gray-300" {...props} />,
          img: ({ node, ...props }) => <img className="h-auto max-w-full rounded-md shadow-md" {...props} />,
          table: ({ node, ...props }) => <table className="w-full border-collapse border border-gray-300" {...props} />,
          thead: ({ node, ...props }) => <thead className="bg-gray-200 font-bold" {...props} />,
          tbody: ({ node, ...props }) => <tbody {...props} />,
          tr: ({ node, ...props }) => <tr className="border-b border-gray-300" {...props} />,
          th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2 text-left" {...props} />,
          td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
};

export default MarkdownRenderer;
