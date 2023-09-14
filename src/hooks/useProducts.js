import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProducts({ condition, search } = {}) {
  const searchParams = new URLSearchParams();

  if (condition) searchParams.set("condition", condition);
  if (search) searchParams.set("q", search);

  return useQuery(["products", { condition, search }], async () => {
    const response = await salesHttpClient.get(`/products?${searchParams}`);

    return response.data;
  });
}
