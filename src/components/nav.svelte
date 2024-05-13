<script lang="ts">
  import { goto } from "$app/navigation";
  import IconButton from "./buttons/IconButton.svelte";
  import TextButton from "./buttons/TextButton.svelte";

  let showMenu = false;

  function onClickNavigate(path: string): void {
    showMenu = false;
    goto(path);
  }
</script>

{#if showMenu}
  <div class="flex flex-row">
    <button
      class="h-screen lg:w-[60vw] w-0"
      on:click={() => (showMenu = !showMenu)}
    />
    <nav
      class="bg-black flex flex-col h-screen lg:w-[40vw] w-screen flex-none border-l-4 border-white"
    >
      <IconButton
        src="menu.png"
        alt="hamburger"
        color="bg-white"
        on:click={() => (showMenu = !showMenu)}
      />

      <TextButton text="home" on:click={() => onClickNavigate("/")} />
      <TextButton
        text="line animations"
        on:click={() => onClickNavigate("/line-animations")}
      />
      <TextButton text="uuid" on:click={() => onClickNavigate("/uuid")} />
    </nav>
  </div>
{:else}
  <nav class="bg-opacity-0">
    <IconButton
      src="menu.png"
      alt="hamburger"
      color="bg-white"
      on:click={() => (showMenu = !showMenu)}
    />
  </nav>
{/if}
