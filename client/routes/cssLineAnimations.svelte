<script lang="ts">
  import LineAutomations from "../components/css-line-automations/lineAutomations.svelte";

  let innerWidth = 0;
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>
<svelte:window bind:innerWidth />

<div class="min-w-full min-h-screen bg-black">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-white font-bold">
        css line animations
      </h1>
      <LineAutomations />
    </div>
  </div>
</div>
