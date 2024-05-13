<script lang="ts">
  import { onMount } from "svelte";
  import { Uuid } from "../../utils/uuid";
  import { configStore } from "../../utils/uuid-store";
  import Button from "./Button.svelte";
  import TextField from "./TextField.svelte";

  let config = $configStore;
  let uuids: string = "";

  onMount(async () => {
    generateUuids();
  });

  function generateUuids() {
    uuids = Uuid.get(config);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(uuids);
  }
</script>

<div class="mt-12">
  <div class="flex">
    <Button on:click={() => generateUuids()} text="generate" />
    <Button on:click={() => copyToClipboard()} text="copy" />
  </div>
  <TextField text={uuids} />
</div>
