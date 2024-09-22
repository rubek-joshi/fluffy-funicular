"use client";
import Link from "next/link";
import { useScramble } from "use-scramble";

type Props = { href: string; label: string };

export const ChapterCard = ({ href, label }: Props) => {
  const { ref, replay } = useScramble({
    text: label,
    speed: 0.3,
    chance: 0.8,
    range: [65, 122],
    playOnMount: false,
  });

  return (
    <Link
      href={href}
      className="col-span-1 h-96 w-full rounded-lg border border-primary px-8 grid place-items-center text-3xl text-center hover:shadow-spread-evenly hover:shadow-primary/40"
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    />
  );
};
