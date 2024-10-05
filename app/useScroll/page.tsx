import { LoremIpsum, PageScrollProgress } from "./components";

export default function UseScrollPage() {
  return (
    <main className="container min-h-screen flex justify-center py-14">
      <PageScrollProgress />

      <div className="max-w-96">
        <LoremIpsum />
      </div>
    </main>
  );
}
