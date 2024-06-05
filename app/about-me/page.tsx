import { CONTENT } from "./content";
import Header from "@/components/Header";

import ReactMarkdown from "react-markdown";

export default function AboutPage() {
  return (
    <main role="main" className="maxContainer">
      <Header />
      <div id="description" className="mx-auto max-w-[800px]">
        <ReactMarkdown className="text-neutral-800 text-sm">
          {CONTENT}
        </ReactMarkdown>
      </div>
    </main>
  );
}
