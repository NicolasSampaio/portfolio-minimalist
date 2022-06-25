import { useState } from "react";
import { Post } from "../api";

interface CollapseProps {
  beginOpen?: boolean;
  title: string;
  description: string;
  posts: Post[];
}

export function Collapse({
  beginOpen,
  title,
  description,
  posts,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(beginOpen || false);

  return (
    <div className="w-full sm:w-[90%] p-8 bg-gray-100 dark:bg-slate-800 rounded-lg hover:shadow-lg transition">
      <button
        className="w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <h2 className="text-xl dark:text-white text-start font-bold">
            {title}
          </h2>
          <p className="text-base dark:text-white text-start font-bold">
            {description}
          </p>
        </div>
      </button>

      {isOpen ? (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post.title}
                className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4"
              >
                <div className="w-72 h-44 flex-shrink-0">
                  <a
                    href={post.hostedAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={post.imgSrc}
                      className="w-72 h-44 rounded-lg object-cover"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-lg dark:text-white font-bold">
                    {post.title}
                  </h3>
                  <p className="text-sm dark:text-white">{post.description}</p>
                  {post.githubUrl ? (
                    <a
                      className="text-blue-600 dark:text-red-600 hover:text-blue-900 transition-colors"
                      href={post.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repository
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
