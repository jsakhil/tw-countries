import { useEffect, useState } from "react";
import { Country, Region } from "../types/country";
import { getCountries } from "../services/countryService";

const BATCH_SIZE = 12;

export function useCountries(region: Region = "all") {
  const [countries, setCountries] = useState<Country[]>([]);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setVisibleCount(BATCH_SIZE);

    getCountries(region)
      .then((data) => setCountries(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [region]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + BATCH_SIZE);
  };

  return {
    countries: countries.slice(0, visibleCount),
    hasMore: visibleCount < countries.length,
    loading,
    loadMore,
  };
}
