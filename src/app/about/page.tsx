import Header from "@/components/header";

export default function About() {
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-[152px] py-10">
        <section className="max-w-4xl mx-auto text-gray-700">
          <h1 className="text-3xl font-bold mb-6 text-emerald-500">
            About This Blog
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to <strong>TravelBook</strong>, your ultimate destination
            for travel inspiration and guidance. Our blog is dedicated to
            helping you explore the world, one destination at a time.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Whether you&apos;re a seasoned traveler or planning your first
            adventure, we provide a wealth of information to make your journeys
            unforgettable. From detailed travel guides and insider tips to
            stunning photography and cultural insights, we cover it all.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is simple: to inspire wanderlust, encourage cultural
            understanding, and equip you with the tools you need to create
            memories that last a lifetime.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            What You&apos;ll Find Here
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>
              Comprehensive travel guides for popular and off-the-beaten-path
              destinations.
            </li>
            <li>Tips and tricks for budget travel, packing, and planning.</li>
            <li>Insights into local cultures, cuisines, and traditions.</li>
            <li>Inspiring stories and experiences from fellow travelers.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Join Us on This Journey
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At TravelBook, we believe that travel has the power to transform
            lives and broaden horizons. We invite you to join our community,
            share your experiences, and embark on a journey of discovery with
            us.
          </p>
          <p className="text-lg leading-relaxed">
            Thank you for visiting our blog. We hope you find our content
            inspiring, informative, and enjoyable. Happy travels!
          </p>
        </section>
      </main>
    </div>
  );
}
