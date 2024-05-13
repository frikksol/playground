<script lang="ts">
  import Selector from "../../components/uuid/Selector.svelte";
  import UuidGenerator from "../../components/uuid/UuidGenerator.svelte";
  import RootView from "../../components/views/RootView.svelte";
  import TextSection from "../../components/views/TextSection.svelte";
  import { UuidConfig } from "../../utils/uuid";
  import { configStore } from "../../utils/uuid-store";

  let config = $configStore;
</script>

<RootView title="uuid">
  <TextSection>Tools for generating and managing UUID's</TextSection>
  <Selector
    title="version"
    elements={UuidConfig.supportedVersions}
    bind:selected={config.version}
  />
  <UuidGenerator />
</RootView>
