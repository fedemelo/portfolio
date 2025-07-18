<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  import { getYearRange } from "../../../shared/utils/year";
  import { getPeriodFromDates } from "../../../shared/utils/period";
  import { filterForResume } from "../../../shared/utils/show";
  import Location from "../../../shared/components/Location.svelte";
  export let experiences: (WorkExperience | Teaching)[];

  function sortExperiences(experiences: (WorkExperience | Teaching)[]) {
    return experiences.sort((a, b) => {
      if (a.isCurrent && b.isCurrent) return 0;
      if (!a.isCurrent && b.isCurrent) return 1;
      if (a.isCurrent && !b.isCurrent) return -1;

      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }
  const sortedExperiences = sortExperiences(filterForResume(experiences));
</script>

<section>
  <h2>Experience</h2>
  <div class="indented-block">
    {#each sortedExperiences as experience}
      <div class="no-break-on-print">
        <div class="row">
          <h3>{experience.title}</h3>
          <p>
            {#if "workMode" in experience}
              {getYearRange(
                experience.startDate,
                experience.endDate,
                experience.isCurrent ?? false
              )}
            {:else if experience.endDate}
              {getPeriodFromDates(
                experience.startDate,
                experience.endDate,
                experience.isCurrent ?? false
              )}
            {:else}
              {getYearRange(
                experience.startDate,
                undefined,
                experience.isCurrent ?? false
              )}
            {/if}
          </p>
        </div>
        <div class="row">
          <p>{experience.organization}</p>
          <Location
            location={{
              city: experience.city,
              state: experience.state,
              country: experience.country,
            }}
          />
        </div>
        {#if experience.achievements && experience.achievements.length > 0}
          <ul>
            {#each experience.achievements.slice(0, 4) as achievement}
              <li>{achievement}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</section>
