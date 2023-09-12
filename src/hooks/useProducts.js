import { useQuery } from "react-query";

export default function useProducts() {
  return useQuery(["products"], () =>
    // TODO localhost ? Really?
    // TODO Client HTTP ? Axios ? Ky ?
    fetch("http://localhost:3001/products").then((response) => response.json()),
  );
}
