<script lang="ts">
  import type { Education } from "../../../shared/schemas/education";
  import { filterForCV } from "../../../shared/utils/show";
  import { getYearRange } from "../../../shared/utils/year";
  import Location from "../../../shared/components/Location.svelte";
  export let education: Education[];
</script>

<section>
  <h2>Education</h2>
  {#each filterForCV(education) as edu}
    <div class="no-break-on-print">
      <div class="row">
        <h3>{edu.organization}</h3>
        <Location
          location={{
            city: edu.city,
            state: edu.state,
            country: edu.country,
          }}
        />
      </div>
      <div class="row">
        <p>{edu.degree}</p>
        <p>
          {getYearRange(edu.startDate, edu.trueEndDate ?? edu.graduationDate)}
        </p>
      </div>
      <div class="row">
        {#if edu.honors}
          <p class="honors" style="font-style: italic;">{edu.honors}</p>
        {/if}
      </div>
      <div class="indented-block">
        {#if edu.gpa}
          <p>GPA: {edu.gpa}</p>
        {/if}
        {#if edu.details?.length}
          {#each edu.details as detail}
            <p>{detail}</p>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</section>
