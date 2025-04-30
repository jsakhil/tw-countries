import { CountryList, HeroWithCarousel } from "../../components/molecules";

const Asia = () => {
  return (
    <div className="flex flex-col gap-0 md:gap-[50px]">
      <div className="main-title flex md:flex-row flex-col items-center justify-center relative mb-10">
        <h1 className="font-noto text-[40px] md:text-[60px] font-bold text-[#3D3D3D] uppercase px-8 leading-[65px] md:leading-[45px] text-center">
          Welcome
        </h1>
      </div>
      <HeroWithCarousel
        carouselImages={Array.from(
          { length: 4 },
          (_, i) => "https://placehold.co/800x500?text=" + (i + 1)
        )}
        bannerImage="https://placehold.co/300x600?text=Asia"
        bannerResImage="https://placehold.co/600x300?text=Asia"
      />
      <CountryList region="asia" />
    </div>
  );
};

export default Asia;
