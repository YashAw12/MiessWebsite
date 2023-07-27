import { Frame48226 } from ".";

export default {
  title: "Components/Frame48226",
  component: Frame48226,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
  },
};
