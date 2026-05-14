<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getYearRange } from "../../../shared/utils/year";
  import { getPeriodFromDates } from "../../../shared/utils/period";
  import { filterForResume } from "../../../shared/utils/show";
  import Location from "../../../shared/components/Location.svelte";
  import { getLocalizedText, getResumeText } from "../../../shared/utils/localization";
  import { groupByGroupId } from "../../../shared/utils/group-by-group-id";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let experiences: (WorkExperience | Teaching)[];

  const language = getContext<Language>('language');

  type SingleEntry = WorkExperience | Teaching;

  function sortExperiences(entries: SingleEntry[]): SingleEntry[] {
    return entries.sort((a, b) => {
      if (a.isCurrent && b.isCurrent) return 0;
      if (!a.isCurrent && b.isCurrent) return 1;
      if (a.isCurrent && !b.isCurrent) return -1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  const groupedEntries = groupByGroupId(sortExperiences(filterForResume(experiences)));
</script>

<section>
  <h2>Experience</h2>
  <div class="indented-block">
    {#each groupedEntries as entry}
      {#if entry.type === 'group'}
        {#each entry.items as item, i}
          {@const filteredAchievements = filterForResume(item.achievements ?? [])}
          {@const showDescriptionAsBullet = item.description?.showInResume ?? false}
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
                />
              </div>
            {/if}
            <div style="margin-left: 0.2in;">
              <div class="row">
                <p style="font-style: italic;">{getLocalizedText(item.title, language)}</p>
                <p>
                  {#if "workMode" in item}
                    {getYearRange(item.startDate, item.endDate, item.isCurrent ?? false)}
                  {:else if item.endDate}
                    {getPeriodFromDates(item.startDate, item.endDate, item.isCurrent ?? false)}
                  {:else}
                    {getYearRange(item.startDate, undefined, item.isCurrent ?? false)}
                  {/if}
                </p>
              </div>
              {#if showDescriptionAsBullet || filteredAchievements.length > 0}
                <ul>
                  {#if showDescriptionAsBullet && item.description}
                    <li>{getResumeText(item.description, language)}</li>
                  {/if}
                  {#each filteredAchievements as achievement}
                    <li>{getResumeText(achievement, language)}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          </div>
        {/each}
      {:else}
        {@const filteredAchievements = filterForResume(entry.item.achievements ?? [])}
        {@const showDescriptionAsBullet = entry.item.description?.showInResume ?? false}
        <div class="no-break-on-print">
          <div class="row">
            <h3>{getLocalizedText(entry.item.title, language)}</h3>
            <p>
              {#if "workMode" in entry.item}
                {getYearRange(
                  entry.item.startDate,
                  entry.item.endDate,
                  entry.item.isCurrent ?? false
                )}
              {:else if entry.item.endDate}
                {getPeriodFromDates(
                  entry.item.startDate,
                  entry.item.endDate,
                  entry.item.isCurrent ?? false
                )}
              {:else}
                {getYearRange(
                  entry.item.startDate,
                  undefined,
                  entry.item.isCurrent ?? false
                )}
              {/if}
            </p>
          </div>
          <div class="row">
            <p>{entry.item.organization.name}</p>
            <Location
              location={{
                city: entry.item.city,
                state: entry.item.state,
                country: entry.item.country,
              }}
            />
          </div>
          {#if showDescriptionAsBullet || filteredAchievements.length > 0}
            <ul>
              {#if showDescriptionAsBullet && entry.item.description}
                <li>{getResumeText(entry.item.description, language)}</li>
              {/if}
              {#each filteredAchievements as achievement}
                <li>{getResumeText(achievement, language)}</li>
              {/each}
            </ul>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</section>
