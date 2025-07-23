<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getCVText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let experience: WorkExperience | Teaching;
  
  const language = getContext<Language>('language');
</script>

<div class="indented-block">
  {#if experience.description}
    <p>{getCVText(experience.description, language)}</p>
  {/if}
  <ul>
    {#if experience.achievements?.length}
      {#each experience.achievements as achievement}
        <li>{getCVText(achievement, language)}</li>
      {/each}
    {/if}
  </ul>
</div>