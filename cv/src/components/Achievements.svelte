<script lang="ts">
  import type { WorkExperience } from "../../../shared/schemas/workExperience";
  import type { Teaching } from "../../../shared/schemas/teaching";
  export let experience: WorkExperience | Teaching;
</script>

<div class="indented-block">
  {#if experience.description}
    <p>{experience.description}</p>
  {/if}
  <ul>
    {#if experience.achievements?.length}
      {#each experience.achievements as achievement}
        <li>{achievement}</li>
      {/each}
    {/if}
  </ul>
</div>