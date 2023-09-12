import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function useProducts() {
  return useQuery(["products"], () =>
    // TODO Client HTTP ? Axios ? Ky ?
    fetch(`${baseUrl}/products`).then((response) => response.json()),
  );
}
