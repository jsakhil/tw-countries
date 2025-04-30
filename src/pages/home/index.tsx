import { CountryList, HeroWithCarousel } from "../../components/molecules";

const Home = () => {
  return (
    <div className="flex flex-col gap-0 md:gap-[50px]">
      <div className="main-title flex md:flex-row flex-col items-center justify-center relative mb-10">
        <h1 className="font-noto text-[40px] md:text-[60px] font-bold text-[#3D3D3D] uppercase px-8 leading-[65px] md:leading-[45px] text-center">
          Welcome
        </h1>
      </div>
      <HeroWithCarousel
        carouselImages={[
          '/images/pexels-francesco-ungaro-96932.jpg',
          '/images/pexels-manjose-19872.jpg',
          '/images/pexels-souvenirpixels-1531660.jpg',
          '/images/pexels-tirachard-kumtanom-112571-347145.jpg',
        ]}
        bannerImage="https://placehold.co/300x600?text=All+Countries"
        bannerResImage="https://placehold.co/600x300?text=All+Countries"
      />
      <CountryList />
    </div>
  );
};

export default Home;
