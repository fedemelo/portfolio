<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import { getYearRange } from "../../../shared/utils/year";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { groupByGroupId } from "../../../shared/utils/group-by-group-id";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let workExperience: WorkExperience[];

  const language = getContext<Language>('language');

  const grouped = groupByGroupId(filterForCV(workExperience));
</script>

<section>
  <h2>Work Experience</h2>
  {#each grouped as entry}
    {#if entry.type === 'group'}
      {#each entry.items as work, i}
        <div class="no-break-on-print">
          {#if i === 0}
            <div class="row">
              <h3>{entry.items[0].organization.name}</h3>
              <Location
                location={{
                  city: entry.items[0].city,
                  state: entry.items[0].state,
                  country: entry.items[0].country,
                }}
                workMode={entry.items[0].workMode}
              />
            </div>
          {/if}
          <div class="row">
            <p style="font-style: italic;">
              {getLocalizedText(work.title, language)}
              {#if work.squad && work.team}
                <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.squad, language)}, {getLocalizedText(work.team, language)}
              {:else if work.team}
                <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.team, language)}
              {/if}
            </p>
            <p>{getYearRange(work.startDate, work.endDate, work.isCurrent)}</p>
          </div>
          <Achievements experience={work} />
        </div>
      {/each}
    {:else}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{entry.item.organization.name}</h3>
          <Location
            location={{
              city: entry.item.city,
              state: entry.item.state,
              country: entry.item.country,
            }}
            workMode={entry.item.workMode}
          />
        </div>
        <div class="row">
          <p style="font-style: italic;">
            {getLocalizedText(entry.item.title, language)}
            {#if entry.item.squad && entry.item.team}
              <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(entry.item.squad, language)}, {getLocalizedText(entry.item.team, language)}
            {:else if entry.item.team}
              <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(entry.item.team, language)}
            {/if}
          </p>
          <p>
            {getYearRange(entry.item.startDate, entry.item.endDate, entry.item.isCurrent)}
          </p>
        </div>
        <Achievements experience={entry.item} />
      </div>
    {/if}
  {/each}
</section>
