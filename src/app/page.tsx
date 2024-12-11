import Header from "@/components/header";
import Hero from "@/components/hero";
import RecentlyPost from "@/components/recently.post";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-full">
        <Header />
        <Hero />
        <RecentlyPost />
      </div>
    </main>
  );
}
