# Quick Start with Next.js

This guide uses Next.js for demonstration purposes, but the package works with any project configured with React, TypeScript, and Tailwind.

## Create a Next.js Project

Follow these steps to set up a Next.js project with TypeScript and Tailwind:

```bash
npx create-next-app@latest
```

## Install toasty-casa

Add the `toasty-casa` package to your project:

```bash
npm install toasty-casa
```

## Initialize toasty-casa

Run the following command to copy the necessary components and types into your project. This command will also update your Tailwind configuration:

```bash
npx toasty init
```

## Add the Provider

Wrap your entire application with the `ToastProvider`. For example, in a Next.js project, update the `src/app/layout.tsx` file to include the `ToastProvider` around the `children` prop:

> Ensure to place the `ToastProvider` inside the `<body>` tag.

```html
<html lang="en">
  <body className={inter.className}>
    <ToastProvider>{children}</ToastProvider>
  </body>
</html>;
```

## Using Toasty

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
        onClick={() => pushToast({ message: "hello mundo" })}
      >
        Push Toast
      </button>
    </main>
  );
}
```
