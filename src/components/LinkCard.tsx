"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  colorClassName?: string;
};

export default function LinkCard({ id, title, url, colorClassName }: LinkCardProps) {
  function handleClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`w-full rounded-xl border border-[var(--card-border)] px-5 py-4 text-center font-medium shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.12)] ${colorClassName ?? "bg-[var(--card)]"}`}
    >
      {title}
    </a>
  );
}
