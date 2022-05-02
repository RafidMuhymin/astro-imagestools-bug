import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  integrations: [astroImageTools],
});
