<script lang="ts">
  import type { Skill } from "../../../shared/schemas/skill";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let skills: Skill[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Technical Skills</h2>
  <div class="indented-block">
      {#each skills as skillCategory}
        <p><strong>{getLocalizedText(skillCategory.category, language)}</strong>: {skillCategory.skills.join(', ')}</p>
    {/each}
  </div>
</section>