<script lang="ts">
  import SelectorItem from "./SelectorItem.svelte";
  import Title from "./Title.svelte";

  export let title: string;
  export let elements: string[];
  export let selected: string = elements[0];

  function onClick(item: string) {
    selected = item;
  }
</script>

<div class="mt-12">
  <Title {title} />
  {#each elements as item}
    <SelectorItem text={item} bind:selected on:click={() => onClick(item)} />
  {/each}
</div>
