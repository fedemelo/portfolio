<script lang="ts">
  import type { Teaching } from "../../../shared/schemas/teaching";
  import type { Course } from "../../../shared/schemas/course";
  import { getPeriodFromDates } from "../../../shared/utils/period";
  import Location from "../../../shared/components/Location.svelte";
  import Achievements from "../components/Achievements.svelte";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let teaching: Teaching[];
  export let courses: Course[];
  
  const language = getContext<Language>('language');
  
  const getCourseByCode = (courseCode: string) => 
    courses.find(c => c.code === courseCode);
</script>

<section>
  <h2>Teaching Experience</h2>
  {#each filterForCV(teaching) as teach}
    {@const course = getCourseByCode(teach.courseCode)}
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
        <span style="font-style: italic;">{getLocalizedText(teach.title, language)}</span>
        {#if course}
          <span style="font-style: normal; margin: 0 3pt;">•</span>
          <span style="font-style: italic;">{getLocalizedText(course.name, language)}</span>
        {/if}
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
