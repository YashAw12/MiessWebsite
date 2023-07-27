import { SecondaryButton } from ".";

export default {
  title: "Components/SecondaryButton",
  component: SecondaryButton,
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
    buttonClassName: {},
    text: "Button",
  },
};
