import { useState } from "react";
import { cn } from "../../utils/cn";
import leftIcon from "../../../public/images/icons-png/left.png";
import rightIcon from "../../../public/images/icons-png/right.png";

interface HeroWithCarouselProps {
  carouselImages: string[];
  bannerImage: string;
  bannerResImage: string;
}

export const HeroWithCarousel = ({
  carouselImages,
  bannerImage,
  bannerResImage,
}: HeroWithCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const total = carouselImages.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="grid grid-row md:grid-cols-[2fr_25%] gap-8 md:gap-[50px]">

      <div
        className="block md:hidden h-[150px] bg-cover bg-no-repeat border-2 border-[#3D3D3D] overflow-hidden bg-center"
        style={{ backgroundImage: `url(${bannerResImage})` }}
      />

      <div className="relative flex flex-col items-center border-2 border-[#3D3D3D] overflow-hidden">
        <img
          src={carouselImages[current]}
          alt={`Slide ${current + 1}`}
          className="object-cover w-full max-h-[500px]"
        />

        <div className="absolute bottom-4 flex items-center justify-center gap-2 my-4">
          <button onClick={prev} className="mr-2">
            <img src={leftIcon} alt="menu icon" className="h-6 w-6" />
          </button>
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={cn(
                "w-[14px] h-[14px] rounded-full",
                index === current ? "bg-[#1D1B20]" : "bg-white"
              )}
            />
          ))}
          <button onClick={next} className="ml-2">
            <img src={rightIcon} alt="menu icon" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className="hidden md:block bg-cover bg-no-repeat border-2 border-[#3D3D3D] overflow-hidden bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
    </section>
  );
};
