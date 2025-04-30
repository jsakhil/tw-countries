import { CountryList, HeroWithCarousel } from "../../components/molecules";

const Europe = () => {
  return (
    <div className="flex flex-col gap-0 md:gap-[50px]">
      <div className="main-title flex md:flex-row flex-col items-center justify-center relative mb-10">
        <h1 className="font-noto text-[40px] md:text-[60px] font-bold text-[#3D3D3D] uppercase px-8 leading-[65px] md:leading-[45px] text-center">
          Welcome
        </h1>
      </div>
      <HeroWithCarousel
        carouselImages={[
          '/images/pexels-kayode-fashola-171812-621812.jpg',
          '/images/pexels-pixabay-414094.jpg',
          '/images/pexels-sevenstormphotography-575362.jpg',
          '/images/pexels-tanathip-rattanatum-1050216-2026454.jpg',
        ]}
        bannerImage="https://placehold.co/300x600?text=Europe"
        bannerResImage="https://placehold.co/600x300?text=Europe"
      />
      <CountryList region="europe" />
    </div>
  );
};

export default Europe;
