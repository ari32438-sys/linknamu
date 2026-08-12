import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import DarkModeToggle from "@/components/DarkModeToggle";

const profile = {
  name: "이병한",
  bio: "50대 1인기업가",
};

const links = [
  { id: "blog", title: "블로그", url: "https://blog.example.com" },
  { id: "instagram", title: "인스타그램", url: "https://instagram.com" },
  { id: "youtube", title: "유튜브", url: "https://youtube.com" },
];

const pastelColors = [
  "bg-rose-100 dark:bg-rose-950/40",
  "bg-sky-100 dark:bg-sky-950/40",
  "bg-amber-100 dark:bg-amber-950/40",
  "bg-emerald-100 dark:bg-emerald-950/40",
  "bg-violet-100 dark:bg-violet-950/40",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <DarkModeToggle />
      <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-6 py-16">
        <Profile name={profile.name} bio={profile.bio} />
        <div className="flex w-full flex-col gap-5">
          {links.map((link, index) => (
            <LinkCard
              key={link.id}
              id={link.id}
              title={link.title}
              url={link.url}
              colorClassName={pastelColors[index % pastelColors.length]}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
