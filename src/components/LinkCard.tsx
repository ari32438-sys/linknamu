"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  clickCount: number;
  onLinkClick: (id: string) => void;
};

export default function LinkCard({ id, title, url, clickCount, onLinkClick }: LinkCardProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onLinkClick(id)}
        className="flex-1 rounded-2xl border border-[var(--card-glass-border)] bg-[var(--card-glass)] px-5 py-4 text-center font-medium text-[var(--foreground)] shadow-[0_4px_18px_rgba(120,72,40,0.1)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--card-glass-hover)] hover:shadow-[0_8px_24px_rgba(120,72,40,0.16)] active:translate-y-0"
      >
        {title}
      </a>
      <span className="shrink-0 text-xs text-[var(--foreground-muted)]">{clickCount}회</span>
    </div>
  );
}
