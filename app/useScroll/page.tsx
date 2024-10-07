import Link from "next/link";
import { LoremIpsum, PageScrollProgress, ShinyButton } from "./components";

export default function UseScrollPage() {
  return (
    <main className="container min-h-screen flex justify-center py-14">
      <PageScrollProgress />

      <div className="max-w-96">
        <LoremIpsum />

        <Link href="/useScroll/task">
          <ShinyButton>Go to Task</ShinyButton>
        </Link>
      </div>
    </main>
  );
}
