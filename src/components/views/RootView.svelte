<script lang="ts">
  let innerWidth = 0;
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="min-w-full min-h-screen bg-black">
  <div
    class="grid xl:grid-cols-2 grid-cols-1 xl:grid-flow-col grid-flow-row xl:px-60 px-6 xl:pt-60 pt-12"
  >
    <div class="">
      <h1 class="sm:text-8xl text-5xl text-white font-bold">{title}</h1>
      <slot />
    </div>
  </div>
</div>
