import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProductsByIds({ ids } = {}) {
  const searchParams = new URLSearchParams();

  ids.forEach((id) => searchParams.append("id", id));

  return useQuery(["products", { ids }], async () => {
    // TODO .get(route, params)
    const response = await salesHttpClient.get(`/products?${searchParams}`);

    // TODO pourquoi faire une requête si les ids sont vides ?
    return ids.length > 0 ? response.data : [];
  });
}
