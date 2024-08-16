import { Meta, StoryObj } from "@storybook/react";
import MyComponent from "./MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "MyComponent",
  component: MyComponent,
};

type Story = StoryObj<typeof MyComponent>;

export const Long: Story = {
  args: {},
};

export default meta;
