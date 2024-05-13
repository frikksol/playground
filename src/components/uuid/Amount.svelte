<script lang="ts">
  import Title from "./Title.svelte";

  export let title: string;
  export let amount: number = 1;
</script>

<div class="mt-12">
  <Title title="{title} from 1 to 1000" />
  <input
    class="bg-black text-white w-24 text-3xl font-bold mt-1 focus:ring-white focus:ring-4 rounded-sm"
    type="number"
    min="1"
    max="1000"
    bind:value={amount}
  />
</div>
