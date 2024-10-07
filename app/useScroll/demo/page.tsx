import { ScrollMarqueeText, ScrollToTop } from "./components";

const UseScrollMarqueeDemoPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center py-14">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 id="#scroll-down" className="text-7xl font-medium mb-2">
          Scroll down
        </h1>
        <h2 className="text-6xl">↓</h2>
      </div>

      <ScrollMarqueeText>
        The quick brown fox jumps over the lazy dog
      </ScrollMarqueeText>

      <ScrollMarqueeText reverse>
        Pack my box with five dozen liquor jugs
      </ScrollMarqueeText>

      <div className="h-screen flex items-end justify-center">
        <ScrollToTop />
      </div>
    </main>
  );
};

export default UseScrollMarqueeDemoPage;
