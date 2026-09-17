<script lang="ts">
  import type { Skill } from "../../../shared/schemas/skill";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from "svelte";
  import type { Language } from "../../../shared/schemas/utils";

  export let skills: Skill[];

  const language = getContext<Language>("language");
</script>

<section>
  <h2>Technical Experience</h2>
  {#each filterForCV(skills) as skillCategory}
    <div class="no-break-on-print">
      <ul>
        <li>
          <span class="category-title">
            {getLocalizedText(skillCategory.category, language)}:
          </span>
          <span>{skillCategory.skills.join(", ")}</span>
        </li>
        <ul></ul>
      </ul>
    </div>
  {/each}
</section>

<style>
  .skills-list {
    margin-left: 0.5rem;
  }
</style>
