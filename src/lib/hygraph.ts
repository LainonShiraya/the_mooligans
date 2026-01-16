const HYGRAPH_ENDPOINT = import.meta.env.VITE_HYGRAPH_ENDPOINT;

export async function fetchHygraph<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Hygraph data");
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Hygraph GraphQL error");
  }

  return json.data;
}
