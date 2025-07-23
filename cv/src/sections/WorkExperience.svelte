<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import { getYearRange } from "../../../shared/utils/year";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let workExperience: WorkExperience[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Work Experience</h2>
  {#each filterForCV(workExperience) as work}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{work.organization}</h3>
        <Location
          location={{
            city: work.city,
            state: work.state,
            country: work.country,
          }}
          workMode={work.workMode}
        />
      </div>
      <div class="row">
        <p style="font-style: italic;">
          {getLocalizedText(work.title, language)}
          {#if work.squad && work.team}
            <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.squad, language)}, {getLocalizedText(work.team, language)}
          {:else if work.team}
            <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.team, language)} 
          {/if}
          
        </p>
        <p>
          {getYearRange(work.startDate, work.endDate, work.isCurrent)}
        </p>
      </div>
    </div>
    <Achievements experience={work} />
  {/each}
</section>
