<script lang="ts">
  import type { WorkMode } from "../schemas/workExperience";
  import type { Location } from "../schemas/location";
  export let location: Location;
  export let workMode: WorkMode | undefined = undefined;
  export let suffix: string | undefined = undefined;

  $: locationStr = [location.city, location.state, location.country].filter(Boolean).join(', ');
</script>

<p>
  {locationStr}{#if workMode}{' '}· {workMode === 'remote' ? 'Remote' : workMode === 'hybrid' ? 'Hybrid' : 'On-site'}{/if}{#if suffix}{' '}· {suffix}{/if}
</p>
