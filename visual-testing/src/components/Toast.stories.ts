import { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
};

type Story = StoryObj<typeof Toast>;

export const Notification: Story = {
  args: {
    intent: "notification",
    message: "hello word",
    isClickToClose: true,
    closeDelay: 10000,
    isAutoClose: true,
  },
};

export const Warning: Story = {
  args: {
    intent: "warning",
    message: "hello word",
    isClickToClose: true,
    closeDelay: 2000,
    isAutoClose: true,
  },
};

export default meta;
