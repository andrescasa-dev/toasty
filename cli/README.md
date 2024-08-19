# Quick start With Next.js
This quick start use Next.js for practical purposes but the package works as long you have React, TS and Tailwind configured

## Create a Next.js project
Follow the steps and ensure your project is set up with TypeScript and Tailwind
```
npx create-next-app@latest
```

## Install toasty-casa
```
npm i toasty-casa
```

## Initialize toasty-casa
it would copy to your project the necessary components, with its correspondent types. Also, it will update your tailwind config

```
npx toasty init
```

## Place the provider
Wrap your entire app using the `ToastProvider`. For example, In Next.js 

```html
<html lang="en">
  <body className={inter.className}>
    <ToastProvider>{children}</ToastProvider>
  </body>
</html>;
```

## Use toasty
Now, you can use the function pushToast provided by useToast hook.
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
        push toast
      </button>
    </main>
  );
}
```