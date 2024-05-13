<script lang="ts">
  let buttonProps = { class: [$$restProps.class] };
  export let text: string;
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="mr-12 w-fit text-white hover:underline text-left text-3xl font-bold font-sansd"
>
  <h1>{text}</h1>
</button>
