<script>
  import { storeHighlightJs } from "@skeletonlabs/skeleton";
  import hljs from "highlight.js";
  import "highlight.js/styles/github-dark.css";
  import "../app.css";
  import Nav from "../components/nav.svelte";

  storeHighlightJs.set(hljs);
</script>

<main class="w-screen h-screen">
  <div class="static">
    <div class="absolute top-0 right-0 z-50">
      <Nav />
    </div>
    <slot />
  </div>
</main>
