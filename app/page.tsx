import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Home() {
  const content = `
| Name   | Age | Role        |
|--------|-----|-------------|
| Seesi  | 32  | Tech Lead   |
| Ama    | 28  | Engineer    |
| Kwame  | 24  | Intern      |
`;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ node, ...props }) => (
              <table
                className="min-w-full border border-gray-300 dark:border-gray-700"
                {...props}
              />
            ),
            th: ({ node, ...props }) => (
              <th
                className="border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 text-left"
                {...props}
              />
            ),
            td: ({ node, ...props }) => (
              <td
                className="border border-gray-300 dark:border-gray-700 p-2"
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </main>
    </div>
  );
}
