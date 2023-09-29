"use client";

import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface NavigationProps {
  first_link: string;
  second_link: string;
}

export function Navigation({ first_link, second_link }: NavigationProps) {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row items-center justify-between p-6 mx-auto">
          <button>
            <Link
              href="/"
              className="duration-200 text-zinc-300 hover:text-zinc-100"
            >
              <FiArrowLeft className="w-6 h-6 " />
            </Link>
          </button>
          <div className="flex justify-between gap-8">
            <button>
              <Link
                href={`/${first_link}`}
                className="duration-200 text-zinc-400 capitalize hover:text-zinc-100"
              >
                {first_link}
              </Link>
            </button>
            <button>
              <Link
                href={`/${second_link}`}
                className="duration-200 capitalize text-zinc-400 hover:text-zinc-100"
              >
                {second_link}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
