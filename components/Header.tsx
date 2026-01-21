"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = false }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="bg-gray-900 dark:bg-black px-4 py-4 flex items-center">
      {showBack && (
        <Link href="/" className="mr-4 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      )}
      {isHomePage && (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center mr-2 relative">
            {/* Heart icon */}
            <svg
              className="w-5 h-5 text-white absolute"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {/* Quill icon inside heart */}
            <svg
              className="w-3 h-3 text-yellow-400 absolute"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.364 2.636L21.364 5.636C21.754 6.026 21.754 6.659 21.364 7.05L19.95 8.464L15.536 4.05L16.95 2.636C17.341 2.246 17.974 2.246 18.364 2.636ZM14.121 5.293L4.293 15.121C4.105 15.309 4 15.563 4 15.828V19H7.172C7.437 19 7.691 18.895 7.879 18.707L17.707 8.879L14.121 5.293Z" />
            </svg>
          </div>
          <h1 className="text-white text-lg font-semibold">{title}</h1>
        </div>
      )}
      {!isHomePage && !showBack && (
        <h1 className="text-white text-lg font-semibold mx-auto">{title}</h1>
      )}
      {!isHomePage && showBack && (
        <h1 className="text-white text-lg font-semibold flex-1 text-center">{title}</h1>
      )}
    </header>
  );
}
