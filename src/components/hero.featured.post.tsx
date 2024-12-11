import HeroFeaturedCard from "./hero.featured.card";
import TextCatalogue from "./text.catalogue";

export default function HeroFeaturedPost() {
  return (
    <section className="hidden lg:block">
      <div>
        <TextCatalogue text_first={"Popular"} text_second={"Posted"} />
        <div className="mt-[55px]">
          <HeroFeaturedCard />
        </div>
      </div>
    </section>
  );
}
