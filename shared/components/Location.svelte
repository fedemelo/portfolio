<script lang="ts">
  import type { WorkMode } from "../schemas/workExperience";
  import type { Location } from "../schemas/location";
  import { formatLocation } from "../utils/location";
  export let location: Location;
  export let workMode: WorkMode | undefined = undefined;
  export let suffix: string | undefined = undefined;

  $: locationStr = formatLocation(location, workMode, suffix);
</script>

<p>
  {locationStr}
</p>
