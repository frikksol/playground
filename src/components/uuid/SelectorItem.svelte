<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let text: string;
  export let selected: string = text;
</script>

{#if selected === text}
  <button
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
    {...buttonProps}
    class="mr-12 w-fit text-white hover:decoration-gray-400 hover:underline text-left text-3xl font-bold font-sans underline"
  >
    <h1>{text}</h1>
  </button>
{:else}
  <button
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:focus
    {...buttonProps}
    class="mr-12 w-fit text-white hover:underline hover:decoration-gray-400 text-left text-3xl font-bold font-sansd"
  >
    <h1>{text}</h1>
  </button>
{/if}
