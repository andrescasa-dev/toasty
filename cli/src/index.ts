#!/usr/bin/env node

import copyAllFiles from "./copy-components.js";
import updateTailwindFile from "./setup-tailwind.js";

const [, , command] = process.argv;

if (command === "init") {
  //npx toasty init
  console.log("Initializing Toasty...");
  copyAllFiles("../assets/", [
    {
      src: "components/",
      dest: "src/components/",
      options: { include: ".tsx", exclude: ".stories.tsx" },
    },
    {
      src: "types/",
      dest: "src/types/",
    },
    {
      src: "hooks/",
      dest: "src/hooks/",
    },
  ]);

  updateTailwindFile();
} else {
  console.log(`Unknown toasty command`);
}
