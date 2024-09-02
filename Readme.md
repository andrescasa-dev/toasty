# Toasty
A customizable and accessible Toast component. You can easily style it with Tailwind CSS, as components are copied directly into your project. CVA i used for a better customization experience.


## Table of Contents
  - [Quick Start](#quick-start)
    - [Usage: Add Provider](#usage-add-provider)
    - [Usage: Push a toast](#usage-push-a-toast)
- [Customization and Flexibility](#customization-and-flexibility)
- [Component API](#component-api)
    
## Quick Start

This guide uses Next.js for demonstration purposes, but the package works in any project configured with React, TypeScript, and Tailwind.

### Create a Next.js Project

Follow these steps to set up a Next.js project with TypeScript and Tailwind:

```bash
npx create-next-app@latest
```

### Install toasty-casa

Add the `toasty-casa` package to your project:

```bash
npm install toasty-casa
```

### Initialize toasty-casa

Run the following command to copy the necessary components and types into your project. This command will also update your Tailwind configuration:

```bash
npx toasty init
```

### Usage: Add Provider

Wrap your entire application with the `ToastProvider`. For example, in a Next.js project, update the `src/app/layout.tsx` file to include the `ToastProvider` around the `children` prop:

> Ensure to place the `ToastProvider` inside the `<body>` tag.

```html
<html lang="en">
  <body className={inter.className}>
    <ToastProvider>{children}</ToastProvider>
  </body>
</html>;
```

### Usage: Push a toast

You can now use the `pushToast` function provided by the `useToast` hook. Here’s an example:

```tsx
"use client";
import useToast from "@/hooks/useToast";

export default function Home() {
  const { pushToast } = useToast();
  return (
    <main>
      <h1>Test</h1>
      <button
        className="bg-white text-black"
        onClick={() => pushToast({ message: "hello world" })}
      >
        Push Toast
      </button>
    </main>
  );
}
```

# Customization and Flexibility

Our Toast package is designed for maximum flexibility. Because the components are copied directly into your project and not compiled, you can easily modify them as needed. Use Tailwind CSS to quickly adjust styles, and manage variants with CVA for clear and straightforward customization. This direct approach ensures you can tailor every aspect of the toasts to fit your design without hassle.

# Component API

## ToastProvider (General Configuration)
Configure global settings for all toasts in your application. These properties will apply to every toast notification unless overridden by individual toast settings.

|Prop|Default|Type|Description|
|---|---|---|---|
| `position` | `'bottom-right'` | `'top-left'` \| `'top'` \| `'top-right'` \| `'bottom-left'` \| `'bottom'` \| `'bottom-right'` | Position of the toast stack. |
|`isClickToClose`|`true`|`boolean`|Default behavior for whether toasts can be closed by clicking.|
|`isAutoClose`|`true`|`boolean`|Default behavior for whether toasts automatically close.|
|`closeDelay`|`2000`|`number`|Default duration in milliseconds for auto-closing toasts.|

## Toast (Particular Config)

| Prop             | Default        | Type                                              | Description                                                      |
| ---------------- | -------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| `message`        | `—`            | `string`                                          | The text message to display inside the toast.                    |
| `intent`         | `notification` | `'notification'` \| `'warning'` \| `'info'` \| `'error'` | Each intent modify the color and the icon of the toast.   |
| `isClickToClose` | `true`         | `boolean`                                         | Whether the toast can be closed by clicking on it.               |
| `isAutoClose`    | `true`         | `boolean`                                         | Whether the toast should automatically close after `closeDelay`. |
| `closeDelay`     | `2000`         | `number`                                          | Duration in milliseconds before the toast automatically closes.  |


