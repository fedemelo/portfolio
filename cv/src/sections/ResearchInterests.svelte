<script lang="ts">
  import type { ResearchInterest } from '../../../shared/schemas/researchInterest';
  import { getCVText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let researchInterests: ResearchInterest;
  
  const language = getContext<Language>('language');
</script>

<section>
  {#if researchInterests.showInCV}
    <h2>Research Interests</h2>
    <p>{getCVText(researchInterests.text, language)}</p>
  {/if}
</section>