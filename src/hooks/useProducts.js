import { useQuery } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function useProducts({ condition, search }) {
  const searchParams = new URLSearchParams();

  if (condition) searchParams.set("condition", condition);
  if (search) searchParams.set("q", search);

  return useQuery(["products", { condition, search }], () =>
    // TODO HTTP Client ? Axios ? Ky ?
    fetch(`${baseUrl}/products?${searchParams}`).then((response) =>
      response.json(),
    ),
  );
}
