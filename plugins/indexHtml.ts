import { Plugin } from "vite";

export default function IndexHtmlPlugin(): Plugin {
  return {
    name: "index-html-plugin",
    apply: "serve",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              type: "module",
              src: "/src/main.tsx",
            },
            injectTo: "body",
          },
        ],
      };
    },
  };
}
