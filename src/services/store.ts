import { fetchHygraph } from "../lib/hygraph";
import { GET_STORE_ITEMS } from "../queries/getStoreItems";

type HygraphStoreItem = {
  id: string;
  name: string;
  date: string;
  price: number;
  paymentUrl: string;
  image: {
    url: string;
  };
};

export async function getStoreItems(): Promise<any[]> {
  const data = await fetchHygraph<{
    storeItems: HygraphStoreItem[];
  }>(GET_STORE_ITEMS);

  return data.storeItems.map((item) => ({
    id: item.id,
    name: item.name,
    date: item.date,
    price: item.price,
    paymentUrl: item.paymentUrl,
    image: item.image.url,
  }));
}
