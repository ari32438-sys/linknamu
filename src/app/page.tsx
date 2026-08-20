"use client";

import { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import DarkModeToggle from "@/components/DarkModeToggle";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/01.jpg",
};

const links = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/ari32438-sys" },
  { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/ari324" },
  { id: "email", title: "✉️ 이메일", url: "mailto:ari32438@gmail.com" },
];

export default function Home() {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    fetch("/api/click")
      .then((res) => res.json())
      .then((counts: Record<string, number>) => {
        setClickCounts((prev) => ({ ...prev, ...counts }));
      })
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <div className="min-h-screen">
      <DarkModeToggle />
      <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-10 px-7 py-20 sm:px-8">
        <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              id={link.id}
              title={link.title}
              url={link.url}
              clickCount={clickCounts[link.id] ?? 0}
              onLinkClick={handleLinkClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
