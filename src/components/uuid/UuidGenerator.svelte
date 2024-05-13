<script lang="ts">
  import { Uuid } from "../../utils/uuid";
  import { configStore } from "../../utils/uuid-store";
  import Button from "./Button.svelte";
  import Title from "./Title.svelte";

  let config = $configStore;
  let uuids: string[] = [""];

  function generateUuids() {
    uuids = Uuid.get(config);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(uuids[0]);
  }
</script>

<div class="mt-12">
  <Title title="generate uuid" />
  <Button on:click={() => generateUuids()} text="generate" />
  <Title title={uuids[0] ?? "no"} />
  <Button on:click={() => copyToClipboard()} text="copy" />
</div>
