import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border border-[var(--card-border)] bg-[var(--card)] shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} fill sizes="144px" className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-neutral-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="text-lg font-bold">{name}</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
    </div>
  );
}
