"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1400,
  className = "",
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      delay = pause;
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      delay = typeSpeed;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={`font-mono ${className}`}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle text-transparent">
        |
      </span>
    </span>
  );
}
