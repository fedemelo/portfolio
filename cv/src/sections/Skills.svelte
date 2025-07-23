<script lang="ts">
  import type { Skill } from "../../../shared/schemas/skill";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let skills: Skill[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Technical Skills</h2>
  {#each filterForCV(skills) as skillCategory}
    <div class="no-break-on-print">
      <span class="category-title">{getLocalizedText(skillCategory.category, language)}:</span>
      <span class="skills-list">{skillCategory.skills.join(', ')}</span>
    </div>
  {/each}
</section>

<style>
  .category-title {
    font-weight: bold;
  }
  
  .skills-list {
    margin-left: 0.5rem;
  }
</style> 