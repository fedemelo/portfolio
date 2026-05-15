<script lang="ts">
  import type { Education } from "../../../shared/schemas/education";
  import { filterForCV } from "../../../shared/utils/show";
  import { getYearRange } from "../../../shared/utils/year";
  import Location from "../../../shared/components/Location.svelte";
  import { getLocalizedText, getCVText, getOrgName } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let education: Education[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Education</h2>
  {#each filterForCV(education) as edu}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{getOrgName(edu.organization, language)}</h3>
        <Location
          location={{
            city: edu.city,
            state: edu.state,
            country: edu.country,
          }}
        />
      </div>
      <div class="row">
        <p>
          {getLocalizedText(edu.degree, language)}{#if edu.relatedAwardTitles?.includes('Summa Cum Laude')}, <em>summa cum laude</em>{/if}
        </p>
        <p>
          {getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}
        </p>
      </div>
      <div class="indented-block">
        {#if edu.gpa}
          <p>GPA: {edu.gpa}</p>
        {/if}
        {#if edu.details?.length}
          {#each edu.details as detail}
            <p>{getCVText(detail, language)}</p>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</section>
