<script lang="ts">
  import { onMount } from "svelte";
  import { Uuid } from "../../utils/uuid";
  import { configStore } from "../../utils/uuid-store";
  import Button from "./Button.svelte";
  import TextField from "./TextField.svelte";

  let config = $configStore;
  let uuids: string = "";
  let copyText = "copy";

  onMount(async () => {
    generateUuids();
  });

  function generateUuids() {
    uuids = Uuid.get(config);
  }

  function copyToClipboard() {
    copyText = "copied!";
    navigator.clipboard.writeText(uuids);
    setInterval(() => {
      copyText = "copy";
    }, 1500);
  }
</script>

<div class="mt-12">
  <div class="flex">
    <Button on:click={() => generateUuids()} text="generate" />
    <Button on:click={() => copyToClipboard()} bind:text={copyText} />
  </div>
  <TextField text={uuids} />
</div>
