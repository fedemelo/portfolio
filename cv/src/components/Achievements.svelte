<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getCVText } from "../../../shared/utils/localization";
  import { filterForCV } from "../../../shared/utils/show";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let experience: WorkExperience | Teaching;

  const language = getContext<Language>('language');

  function isTeaching(item: WorkExperience | Teaching): item is Teaching {
    return 'courseCode' in item;
  }

  // Show description in the CV by default, unless explicitly instructed not to
  $: showDescription = isTeaching(experience) && (experience.description?.showInCV ?? true);
  $: bullets = isTeaching(experience)
    ? filterForCV(experience.achievements ?? [])
    : filterForCV(experience.details ?? []);
</script>

<div class="indented-block">
  {#if showDescription && isTeaching(experience) && experience.description}
    <p>{getCVText(experience.description, language)}</p>
  {/if}
  <ul>
    {#if bullets.length > 0}
      {#each bullets as bullet}
        <li>{getCVText(bullet, language)}</li>
      {/each}
    {/if}
  </ul>
</div>
