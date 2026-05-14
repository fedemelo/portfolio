<script lang="ts">
  import type { Teaching } from "../../../shared/schemas/teaching";
  import type { Course } from "../../../shared/schemas/course";
  import { getPeriodFromDates } from "../../../shared/utils/period";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { groupByGroupId } from "../../../shared/utils/group-by-group-id";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";

  export let teaching: Teaching[];
  export let courses: Course[];

  const language = getContext<Language>('language');

  const getCourseByCode = (courseCode: string) =>
    courses.find(c => c.code === courseCode);

  const grouped = groupByGroupId(filterForCV(teaching));
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each grouped as entry}
    {#if entry.type === 'group'}
      {@const firstCourse = getCourseByCode(entry.items[0].courseCode)}
      {#each entry.items as teach, i}
        {@const course = getCourseByCode(teach.courseCode)}
        <div class="no-break-on-print">
          {#if i === 0}
            <div class="row">
              <h3>{firstCourse ? firstCourse.organization.name : entry.items[0].organization.name}</h3>
              {#if firstCourse}
                <Location
                  location={{
                    city: firstCourse.city,
                    state: firstCourse.state,
                    country: firstCourse.country,
                  }}
                />
              {/if}
            </div>
          {/if}
          <div class="row">
            <p>
              <span style="font-style: italic;">{getLocalizedText(teach.title, language)}</span>
              {#if course}
                <span style="font-style: normal; margin: 0 3pt;">•</span>
                <span style="font-style: italic;">{getLocalizedText(course.name, language)}</span>
              {/if}
            </p>
            <p>{getPeriodFromDates(teach.startDate, teach.endDate, teach.isCurrent)}</p>
          </div>
          <Achievements experience={teach} />
        </div>
      {/each}
    {:else}
      {@const course = getCourseByCode(entry.item.courseCode)}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{course ? course.organization.name : ''}</h3>
          {#if course}
            <Location
              location={{
                city: course.city,
                state: course.state,
                country: course.country,
              }}
            />
          {/if}
        </div>
        <div class="row">
          <p>
            <span style="font-style: italic;">{getLocalizedText(entry.item.title, language)}</span>
            {#if course}
              <span style="font-style: normal; margin: 0 3pt;">•</span>
              <span style="font-style: italic;">{getLocalizedText(course.name, language)}</span>
            {/if}
          </p>
          <p>
            {getPeriodFromDates(entry.item.startDate, entry.item.endDate, entry.item.isCurrent)}
          </p>
        </div>
        {#if entry.item.supervisor}
          <div class="row">
            <p style="color: #666;">Supervisor: {entry.item.supervisor}</p>
          </div>
        {/if}
        <Achievements experience={entry.item} />
      </div>
    {/if}
  {/each}
</section>
