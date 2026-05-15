<script lang="ts">
  import type { Award } from "../../../shared/schemas/award";
  import { filterForResume } from "../../../shared/utils/show";
  import { getLocalizedText, getOrgName } from "../../../shared/utils/localization";
  import { getPeriodFromDate } from "../../../shared/utils/period";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let awards: Award[];

  const language = getContext<Language>('language');

  function getDateLabels(award: Award): string[] {
    if (!award.instances || award.instances.length === 0) {
      return award.date ? [String(award.date.getFullYear())] : [];
    }
    const years = award.instances.map(i => i.date.getFullYear());
    const uniqueYears = [...new Set(years)].sort();
    if (award.instances.length > uniqueYears.length) {
      return award.instances.map(i => getPeriodFromDate(i.date));
    }
    return uniqueYears.map(String);
  }

  function formatMeta(award: Award): string {
    const labels = getDateLabels(award);
    const parts = [getOrgName(award.organization, language)];
    if (labels.length > 0) parts.push(labels.join(', '));
    return parts.join(', ');
  }

  function getCount(award: Award): number {
    return award.instances?.length ?? 1;
  }
</script>

<section>
  <h2>Awards & Honors</h2>
  <div class="indented-block">
    {#each filterForResume(awards) as award}
      {@const count = getCount(award)}
      <div class="row">
        <p>
          {getLocalizedText(award.title, language)}{count > 1 ? ` (${count} times)` : ''}
        </p>
        <p>{formatMeta(award)}</p>
      </div>
    {/each}
  </div>
</section>
