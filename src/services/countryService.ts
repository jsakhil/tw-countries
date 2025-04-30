import { ALL, REGION } from "../constants/endpoints";
import { Country, Region } from "../types/country";
import { api } from "./api";

/**
 * Fetch countries from the API by region.
 * @param region 'all', 'asia', or 'europe'
 * @returns Promise<Country[]>
 */
export const getCountries = async (region: Region): Promise<Country[]> => {
  const endpoint = region === "all" ? ALL : `${REGION}/${region}`;

  const response = await api.get<Country[]>(endpoint, {
    params: { fields: "name,region,flag" },
  });
  return response.data;
};
