/* ./setup/shiki.ts */
import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(() => {
  return {
    theme: 'dracula-soft',
    langs: [
      "markdown",
      "md",
      "mdx",
      "mdc",
      "yaml",
      "html",
      "vue",
      "vue-html",
      "angular-html",
      "angular-ts",
      "js",
      "jsx",
      "typescript",
      "tsx",
    ],
  };
});
