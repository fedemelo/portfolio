<script lang="ts">
  import type { Extracurricular } from "../../../shared/schemas/extracurricular";
  import { filterForCV } from "../../../shared/utils/show";
  import { getCVText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let extracurriculars: Extracurricular[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Extracurricular Activities</h2>
  {#each filterForCV(extracurriculars) as extracurricular}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{getCVText(extracurricular.description, language)}</h3>
      </div>
      <div class="indented-block">
        {#each extracurricular.events as event}
          <div class="row">
            <p>{getCVText(event, language)}</p>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>