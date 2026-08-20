import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white/60 shadow-[0_2px_4px_rgba(255,255,255,0.5)_inset,0_12px_28px_rgba(120,72,40,0.22)] dark:ring-white/10">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill sizes="144px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--card-glass)] text-4xl font-semibold text-[var(--foreground-muted)]">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-[var(--foreground-muted)]">{bio}</p>
      </div>
    </div>
  );
}
