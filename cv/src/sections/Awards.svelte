<script lang="ts">
  import type { Award } from "../../../shared/schemas/award";
  import { filterForCV } from "../../../shared/utils/show";
  import { getYearRange } from "../../../shared/utils/year";
  import { getPeriodFromDate } from "../../../shared/utils/period";
  import { getLocalizedText, getCVText, getOrgName } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let awards: Award[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Awards and Honors</h2>
  {#each filterForCV(awards) as award}
    <div class="no-break-on-print">
      <h3>{getLocalizedText(award.title, language)}</h3>
      <div class="row">
        <p>{getOrgName(award.organization, language)}</p>
        {#if award.date}
          <p>{getYearRange(award.date)}</p>
        {/if}
      </div>
      <div class="indented-block">
        <p>{getCVText(award.description, language)}</p>
        {#if award.instances}
          <ul>
            {#each award.instances as instance}
              <li>
                <div class="row">
                  <span>{getCVText(instance.description, language)}</span>
                  <span>{getPeriodFromDate(instance.date)}</span>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/each}
</section>