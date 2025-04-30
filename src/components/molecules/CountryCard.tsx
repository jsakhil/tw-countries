import { Country } from "../../types/country";
import { CountryFlag, CountryName, RegionBadge } from "../atoms";

export const CountryCard = ({ country }: { country: Country }) => (
  <div className="flex items-center gap-4 p-4 bg-white shadow hover:shadow-md transition border-2 border-[#3D3D3D] overflow-hidden h-[70px] md:h-[130px] [box-shadow:8px_8px_0px_rgba(0,_0,_0,_0.1)]">
    <CountryFlag src={country.flag} alt={country.name} />
    <div>
      <CountryName name={country.name} />
      <RegionBadge region={country.region} />
    </div>
  </div>
);
