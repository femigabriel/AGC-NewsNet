import HeroSection from "@/components/landing-page/HeroSection";
import LatestNewsSection from "@/components/landing-page/LatestNewsSection";
import TopStoriesSection from "@/components/landing-page/TopStoriesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TopStoriesSection />
      <LatestNewsSection />
    </main>
  );
}
