import { useState } from "react";

export default function useProductSearch() {
  const [condition, setConditionState] = useState("");
  const [search, setSearchState] = useState("");

  const setCondition = (event) => setConditionState(event.currentTarget.value);
  const setSearch = (event) => setSearchState(event.currentTarget.value);

  return { condition, search, setCondition, setSearch };
}
