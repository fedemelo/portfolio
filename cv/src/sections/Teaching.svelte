<script lang="ts">
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getPeriodFromDates } from "../../../shared/utils/period";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let teaching: Teaching[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each filterForCV(teaching) as teach}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{teach.organization}</h3>
        <Location
          location={{
            city: teach.city,
            state: teach.state,
            country: teach.country,
          }}
        />
      </div>
      <div class="row">
        <p style="font-style: italic;">
          {getLocalizedText(teach.title, language)}{teach.course ? ` - ${getLocalizedText(teach.course.name, language)}` : ""}
        </p>
        <p>
          {getPeriodFromDates(teach.startDate, teach.endDate, teach.isCurrent)}
        </p>
      </div>
      {#if teach.supervisor}
        <div class="row">
          <p style="color: #666;">Supervisor: {teach.supervisor}</p>
        </div>
      {/if}
    </div>
    <Achievements experience={teach} />
  {/each}
</section>
