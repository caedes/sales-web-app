import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProduct(id) {
  return useQuery(["products", id], async () => {
    const response = await salesHttpClient.get(`/products/${id}`);

    return response.data;
  });
}
