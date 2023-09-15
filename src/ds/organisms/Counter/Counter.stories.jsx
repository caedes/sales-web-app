import { Counter } from "./";

export default {
  title: "ds/organisms/Counter",
  component: Counter,
};

export const Default = {};

export const WithStepAt2 = {
  args: {
    step: 2,
  },
};
