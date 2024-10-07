import Link from "next/link";
import { LoremIpsum, PageScrollProgress, ShinyButton } from "./components";

export default function UseScrollPage() {
  return (
    <main className="container min-h-screen flex justify-center py-14">
      <PageScrollProgress />

      <div className="max-w-96">
        <LoremIpsum />

        <Link href="/useScroll/demo">
          <ShinyButton>Go to Another Demo</ShinyButton>
        </Link>
      </div>
    </main>
  );
}
