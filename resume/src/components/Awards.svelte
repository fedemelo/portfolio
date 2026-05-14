<script lang="ts">
  import type { Award } from "../../../shared/schemas/award";
  import { filterForResume } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let awards: Award[];

  const language = getContext<Language>('language');

  function getYears(award: Award): number[] {
    if (award.instances && award.instances.length > 0) {
      return award.instances.map(i => i.date.getFullYear());
    }
    if (award.date) return [award.date.getFullYear()];
    return [];
  }

  function formatMeta(award: Award): string {
    const years = [...new Set(getYears(award))].sort();
    const parts = [award.organization.name];
    if (years.length > 0) parts.push(years.join(', '));
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
          {getLocalizedText(award.title, language)}{count > 1 ? ` ×${count}` : ''}
        </p>
        <p style="color: #666;">{formatMeta(award)}</p>
      </div>
    {/each}
  </div>
</section>
