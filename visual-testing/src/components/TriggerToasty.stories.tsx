import useToast from "@/hook/useToast";
import { ToastStackConfig } from "@/types";
import { Meta, StoryObj } from "@storybook/react";
import ToastProvider from "./ToastProvider";

const meta: Meta<typeof TriggerToasty> = {
  title: "TriggerToasty",
  component: TriggerToasty,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof TriggerToasty>;

export const Notification: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "bottom-right",
  },
};

function TriggerToasty(config: ToastStackConfig) {
  return (
    <ToastProvider {...config}>
      <Button />
    </ToastProvider>
  );
}

function Button() {
  const { pushToast } = useToast();
  return (
    <button
      className="border p-4 border-border rounded-200"
      onClick={() => pushToast({ intent: "info", message: "hola mundo" })}
    >
      TriggerToasty
    </button>
  );
}

export const NoAutoclose: Story = {
  args: {
    closeDelay: 10000,
    isAutoClose: false,
    isClickToClose: true,
    position: "bottom-right",
  },
};

export const TopLeft: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "top-left",
  },
};

export const Top: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "top",
  },
};

export const TopRight: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "top-right",
  },
};

export const BottomLeft: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "bottom-left",
  },
};

export const Bottom: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "bottom",
  },
};

export const BottomRight: Story = {
  args: {
    closeDelay: 2000,
    isAutoClose: true,
    isClickToClose: true,
    position: "bottom-right",
  },
};
