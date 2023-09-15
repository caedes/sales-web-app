import { ProductCondition } from "./";

export default {
  title: "business/products/ProductCondition",
  component: ProductCondition,
};

export const New = {
  args: {
    condition: "new",
  },
};

export const Used = {
  args: {
    condition: "used",
  },
};
