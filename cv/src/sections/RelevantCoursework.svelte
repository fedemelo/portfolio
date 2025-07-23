<!-- src/components/RelevantCoursework.svelte -->
<script lang="ts">
  import type { RelevantCoursework } from "../../../shared/schemas/relevantCoursework";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let relevantCoursework: RelevantCoursework[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Relevant Coursework</h2>
  <div class="coursework-container">
    {#each filterForCV(relevantCoursework) as area}
      <div class="coursework-item">
        <div class="row">
          <p style="font-weight: bold;">{getLocalizedText(area.area, language)}</p>
        </div>
        <div class="indented-block">
          {#each area.courses as course}
            <p>{getLocalizedText(course.name, language)}</p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @import "../styles/RelevantCoursework.css";
</style>