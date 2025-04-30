import { useCountries } from "../../hooks/useCountries";
import { CountryCard } from "./CountryCard";
import { FullPageLoader } from "./FullPageLoader";

interface CountryListProps {
  region?: "all" | "asia" | "europe";
}

export const CountryList = ({ region = "all" }: CountryListProps) => {
  const { countries, hasMore, loadMore, loading } = useCountries(region);

  if (loading) return <FullPageLoader />;

  return (
    <div className="mt-10 md:mt-0 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>

      {hasMore && (
        <div className="!mt-8 md:!mt-10 text-center">
          <button
            onClick={loadMore}
            className="h-[48px] px-8 py-2 bg-[#3C3C3C] text-white hover:bg-[#587FFF] transition text-[16px] font-noto font-semibold"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
