<script lang="ts">
  import Title from "./Title.svelte";

  export let title: string;
  export let amount: number = 1;
</script>

<div class="mt-12">
  <Title title="{title} from 1 to 1000" />
  <div class="flex">
    <button
      on:click={() => amount--}
      class="mr-2 w-fit text-white hover:underline hover:decoration-gray-400 text-left text-5xl font-bold font-sans"
    >
      <h1>-</h1>
    </button>
    <input
      class="text-center bg-black text-white w-24 text-3xl font-bold mt-1
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      type="number"
      min="1"
      max="1000"
      bind:value={amount}
    />
    <button
      on:click={() => amount++}
      class="ml-2 w-fit text-white hover:underline hover:decoration-gray-400 text-left text-5xl font-bold font-sans"
    >
      <h1>+</h1>
    </button>
  </div>
</div>
