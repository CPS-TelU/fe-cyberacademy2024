import { medpartImages } from "@/lib/data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MediaPartnerSection = () => {
  return (
    <section className="py-6 md:py-12 text-center">
      {/* Responsive Heading */}
      <div className="pb-6 md:pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          <span className="gradient-text">Media Partner</span>
        </h1>
      </div>

      {/* Infinite Moving Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <InfiniteMovingCards
          items={medpartImages}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default MediaPartnerSection;
