import Image from "next/image";
export default function Hero() {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row justify-between mt-20 gap-20">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-7xl font-bold ">Explore the World with Me</h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover hidden gems, unforgettable adventures, and tips for your
            next journey.
          </p>
          <button className="p-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-700 mt-4">
            Start Your Adventure
          </button>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <Image
              src="https://doodleipsum.com/700/flat?i=5f2cf6d90fa281ef1d6bb43aafc87adc"
              alt="hero image"
              width={500}
              height={500}
              loading="eager"
              className="h-auto w-full min-w-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
