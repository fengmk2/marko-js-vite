import { defineConfig } from "@voidzero-dev/vite-plus";

export default defineConfig({
  ssr: {
    noExternal: ["dep"]
  }
})