import { Header } from "./components/Header";
import { useState } from "react";
import { Collapse } from "./components/Collapse";
import { books, projects } from "./api";

export function App() {
  return (
    <div className="min-h-screen dark:bg-slate-900">
      <div className="max-w-3xl flex flex-col gap-4 p-8 mx-auto">
        <Header />

        <main className="flex flex-col gap-4">
          <Collapse
            beginOpen
            title="Portfolio"
            description="Some projects I worked on, let me know what you think!"
            posts={projects}
          />

          <Collapse
            title="Books"
            description="Amazing books that I had the pleasure of reading and recommend."
            posts={books}
          />
        </main>
      </div>
    </div>
  );
}
