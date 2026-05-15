<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import type { Course } from "../../../shared/schemas/course";
  import { formatDateRange, formatTeachingPeriod } from "../../../shared/utils/year";
  import { filterForResume } from "../../../shared/utils/show";
  import Location from "../../../shared/components/Location.svelte";
  import { getLocalizedText, getResumeText, getOrgName } from "../../../shared/utils/localization";
  import { groupByGroupId } from "../../../shared/utils/group-by-group-id";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let experiences: (WorkExperience | Teaching)[];
  export let courses: Course[] = [];

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

  function isTeaching(item: SingleEntry): item is Teaching {
    return 'courseCode' in item;
  }

  function getSubtitle(item: SingleEntry): string | undefined {
    if (isTeaching(item)) {
      const course = courses.find(c => c.code === item.courseCode);
      return course ? getLocalizedText(course.name, language) : undefined;
    }
    // Work experience: show team only if explicitly opted in
    if (item.showSubtitle === true && item.team) {
      return item.squad
        ? `${getLocalizedText(item.squad, language)}, ${getLocalizedText(item.team, language)}`
        : getLocalizedText(item.team, language);
    }
    return undefined;
  }

  function getPeriod(item: SingleEntry): string {
    if (isTeaching(item)) return formatTeachingPeriod(item.period, item.startDate, item.endDate, item.isCurrent);
    return formatDateRange(item.startDate, item.endDate, item.isCurrent ?? false);
  }

  const groupedEntries = groupByGroupId(sortExperiences(filterForResume(experiences)));

  function employmentLabel(item: SingleEntry): string | undefined {
    if (!('employmentType' in item)) return undefined;
    return ({ 'full-time': 'Full-time', 'part-time': 'Part-time', 'internship': 'Internship' } as Record<string, string>)[item.employmentType];
  }

  function getGroupRange(items: Array<{ startDate: Date; endDate?: Date; isCurrent?: boolean }>): string {
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
  <h2>Experience</h2>
  <div class="indented-block">
    {#each groupedEntries as entry}
      {#if entry.type === 'group'}
        {#each entry.items as item, i}
          {@const filteredAchievements = filterForResume(item.achievements ?? [])}
          {@const showDescriptionAsBullet = item.description?.showInResume ?? false}
          {@const subtitle = item.showSubtitle !== false ? getSubtitle(item) : undefined}
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
                workMode={'workMode' in entry.items[0] ? entry.items[0].workMode : undefined}
                suffix={employmentLabel(entry.items[0])}
              />
            {/if}
            <div style="margin-left: 0.2in;">
              <div class="row">
                <p style="font-style: italic;">
                  {getLocalizedText(item.title, language)}{#if subtitle}<span style="font-style: normal;">{' '}· </span>{subtitle}{/if}
                </p>
                <p>
                  {getPeriod(item)}
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
        {@const subtitle = entry.item.showSubtitle !== false ? getSubtitle(entry.item) : undefined}
        <div class="no-break-on-print">
          <div class="row">
            <h3>
              {getLocalizedText(entry.item.title, language)}{#if subtitle}<span style="font-weight: normal; font-style: italic;">{' '}· </span>{subtitle}{/if}
            </h3>
            <p>
              {getPeriod(entry.item)}
            </p>
          </div>
          <div class="row">
            <p>{getOrgName(entry.item.organization, language)}</p>
            <Location
              location={{
                city: entry.item.city,
                state: entry.item.state,
                country: entry.item.country,
              }}
              workMode={'workMode' in entry.item ? entry.item.workMode : undefined}
              suffix={employmentLabel(entry.item)}
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
