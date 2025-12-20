<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getCVText } from "../../../shared/utils/localization";
  import { filterForCV } from "../../../shared/utils/show";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let experience: WorkExperience | Teaching;
  
  const language = getContext<Language>('language');
  // Show description in the CV by default, unless explicitly instructed not to
  $: showDescription = experience.description?.showInCV ?? true;
  $: filteredAchievements = filterForCV(experience.achievements ?? []);
</script>

<div class="indented-block">
  {#if showDescription && experience.description}
    <p>{getCVText(experience.description, language)}</p>
  {/if}
  <ul>
    {#if filteredAchievements.length > 0}
      {#each filteredAchievements as achievement}
        <li>{getCVText(achievement, language)}</li>
      {/each}
    {/if}
  </ul>
</div>