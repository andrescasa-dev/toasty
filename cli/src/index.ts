#!/usr/bin/env node

import copyAllFiles from "./copy-components.js";
import updateTailwindFile from "./setup-tailwind.js";

copyAllFiles([
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
