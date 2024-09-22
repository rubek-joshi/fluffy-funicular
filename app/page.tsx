import { ChapterCard } from "./components";

const LINKS = [
  { label: "Motion", href: "/motion" },
  { label: "Animate Presence", href: "/animate-presence" },
  { label: "Reorder", href: "/reorder" },
  { label: "useScroll", href: "/useScroll" },
  { label: "Layout", href: "/layout" },
];

export default function Home() {
  return (
    <main className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center min-h-screen py-14">
      {LINKS.map((data) => (
        <ChapterCard {...data} key={data.href} />
      ))}
    </main>
  );
}
