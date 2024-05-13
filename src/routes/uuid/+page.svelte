<script lang="ts">
  import Selector from "../../components/uuid/Selector.svelte";
  import UuidGenerator from "../../components/uuid/UuidGenerator.svelte";
  import RootView from "../../components/views/RootView.svelte";
  import { UuidConfig } from "../../utils/uuid";
  import { configStore } from "../../utils/uuid-store";

  let config = $configStore;
</script>

<RootView title="uuid generator">
  <Selector
    title="version"
    elements={UuidConfig.supportedVersions}
    bind:selected={config.version}
  />
  <Selector
    title="output type"
    elements={UuidConfig.supportedOutputTypes}
    bind:selected={config.output}
  />
  <UuidGenerator />
</RootView>
