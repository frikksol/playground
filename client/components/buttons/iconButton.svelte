<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let src: string;
  export let alt: string;
  export let color: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mx-10 mt-12 w-20 {color} hover:bg-white invert"
>
  <img class="p-3 w-20 h-20" {src} {alt} />
</button>
