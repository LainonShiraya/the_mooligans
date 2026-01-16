import { fetchHygraph } from "../lib/hygraph";
import { GET_HERO_BACKGROUND } from "../queries/getHeroBackground";

export async function getHeroBackground(): Promise<string | null> {
  const data = await fetchHygraph<{
    siteVisuals: {
      heroBackground: {
        url: string;
      };
    }[];
  }>(GET_HERO_BACKGROUND);

  return data.siteVisuals[0]?.heroBackground?.url ?? null;
}
