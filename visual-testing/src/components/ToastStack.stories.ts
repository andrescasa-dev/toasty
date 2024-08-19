import ToastStack from "@/components/ToastStack";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToastStack> = {
  title: "ToastStack",
  component: ToastStack,
};

type Story = StoryObj<typeof ToastStack>;

export const Stack: Story = {
  args: {
    closeDelay: 4000,
    isAutoClose: true,
    isClickToClose: true,
    position: "bottom-right" as const,
    stackToastData: [
      { id: "1", message: "hello world" },
      { id: "2", message: "hello world long long" },
    ],
  },
};

export default meta;
