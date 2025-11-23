<script lang="ts">
  import type { Education } from "../../../shared/schemas/education";
  import { getYearRange } from "../../../shared/utils/year";
  import { filterForResume } from "../../../shared/utils/show";
  import Location from "../../../shared/components/Location.svelte";
  import { getLocalizedText, getResumeText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let education: Education[];
  
  const language = getContext<Language>('language');

  function formatHonors(titles: string[]): string {
    const counts: Record<string, number> = {};
    titles.forEach(title => {
      counts[title] = (counts[title] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([title, count]) => count > 1 ? `${title} × ${count}` : title)
      .join(', ');
  }
</script>

<section>
  <h2>Education</h2>
  <div class="indented-block">
    {#each filterForResume(education) as edu}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{edu.organization.name}</h3>
          <Location
            location={{
              city: edu.city,
              state: edu.state,
              country: edu.country,
            }}
          />
        </div>
        <div class="row">
          <p style="font-style: italic;">
            {getLocalizedText(edu.degree, language)}
          </p>
          <p>
            {getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}
          </p>
        </div>
        {#if edu.gpa || (edu.details && edu.details.length > 0) || (edu.relatedAwardTitles && edu.relatedAwardTitles.length > 0)}
          <ul>
            {#if edu.gpa}
              <li>GPA: {edu.gpa}</li>
            {/if}
            {#if edu.details && edu.details.length > 0}
              {#each edu.details as detail}
                <li>{getResumeText(detail, language)}</li>
              {/each}
            {/if}
            {#if edu.relatedAwardTitles && edu.relatedAwardTitles.length > 0}
              <li><strong>Honors:</strong> {formatHonors(edu.relatedAwardTitles)}</li>
            {/if}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</section>
