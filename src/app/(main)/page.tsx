import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import RecentlyPost from "@/components/featured.post";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col overflow-x-hidden">
        <Header />
        <Hero />
        <RecentlyPost />
        <Footer />
      </div>
    </main>
  );
}
