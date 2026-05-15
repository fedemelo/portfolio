<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import { formatDateRange } from "../../../shared/utils/year";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText, getOrgName } from "../../../shared/utils/localization";
  import { groupByGroupId } from "../../../shared/utils/group-by-group-id";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let workExperience: WorkExperience[];

  const language = getContext<Language>('language');

  const grouped = groupByGroupId(filterForCV(workExperience));

  function employmentLabel(type: string): string | undefined {
    return ({ 'full-time': 'Full-time', 'part-time': 'Part-time', 'internship': 'Internship' } as Record<string, string>)[type];
  }

  function getGroupRange(items: WorkExperience[]): string {
    const start = items.reduce((min, it) => it.startDate < min ? it.startDate : min, items[0].startDate);
    const isCurrent = items.some(it => it.isCurrent);
    const end = isCurrent ? undefined : items.reduce<Date | undefined>((max, it) => {
      if (!it.endDate) return max;
      return !max || it.endDate > max ? it.endDate : max;
    }, undefined);
    return formatDateRange(start, end, isCurrent);
  }
</script>

<section>
  <h2>Work Experience</h2>
  {#each grouped as entry}
    {#if entry.type === 'group'}
      {#each entry.items as work, i}
        <div class="no-break-on-print">
          {#if i === 0}
            <div class="row">
              <h3>{getOrgName(entry.items[0].organization, language)}</h3>
              <p>{getGroupRange(entry.items)}</p>
            </div>
            <Location
              location={{
                city: entry.items[0].city,
                state: entry.items[0].state,
                country: entry.items[0].country,
              }}
              workMode={entry.items[0].workMode}
              suffix={employmentLabel(entry.items[0].employmentType)}
            />
          {/if}
          <div class="row">
            <p style="font-style: italic;">
              {getLocalizedText(work.title, language)}
              {#if work.showSubtitle !== false}
                {#if work.squad && work.team}
                  <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.squad, language)}, {getLocalizedText(work.team, language)}
                {:else if work.team}
                  <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(work.team, language)}
                {/if}
              {/if}
            </p>
            <p>
              {formatDateRange(work.startDate, work.endDate, work.isCurrent)}
            </p>
          </div>
          <Achievements experience={work} />
        </div>
      {/each}
    {:else}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{getOrgName(entry.item.organization, language)}</h3>
          <Location
            location={{
              city: entry.item.city,
              state: entry.item.state,
              country: entry.item.country,
            }}
            workMode={entry.item.workMode}
            suffix={employmentLabel(entry.item.employmentType)}
          />
        </div>
        <div class="row">
          <p style="font-style: italic;">
            {getLocalizedText(entry.item.title, language)}
            {#if entry.item.showSubtitle !== false}
              {#if entry.item.squad && entry.item.team}
                <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(entry.item.squad, language)}, {getLocalizedText(entry.item.team, language)}
              {:else if entry.item.team}
                <span style="font-style: normal; margin: 0 3pt;">•</span>{getLocalizedText(entry.item.team, language)}
              {/if}
            {/if}
          </p>
          <p>
            {formatDateRange(entry.item.startDate, entry.item.endDate, entry.item.isCurrent)}
          </p>
        </div>
        <Achievements experience={entry.item} />
      </div>
    {/if}
  {/each}
</section>
