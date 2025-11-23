<script lang="ts">
  import type { Award } from "../../../shared/schemas/award";
  import { filterForCV } from "../../../shared/utils/show";
  import { getYearRange, getYearSequence } from "../../../shared/utils/year";
  import { getLocalizedText, getCVText } from "../../../shared/utils/localization";
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
        <p>{award.organization.name}</p>
        {#if award.date}
          <p>{getYearRange(award.date)}</p>
        {:else if award.instances}
          <p>{getYearSequence(award.instances.map((instance) => instance.date))}</p>
        {/if}
      </div>
      <div class="indented-block">
        <p>{getCVText(award.description, language)}</p>
      </div>
    </div>
  {/each}
</section>