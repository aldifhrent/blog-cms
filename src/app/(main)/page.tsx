import FeaturedPost from "@/components/post/featured.post";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col overflow-x-hidden">
        <Header />
        <Hero />
        <FeaturedPost />
        <Footer />
      </div>
    </main>
  );
}
