<script lang="ts">
  import { PERSONAL_INFO } from '../../shared/data/personalInfo';
  import PersonalInfo from './components/PersonalInfo.svelte';

  import { WORK_EXPERIENCE } from '../../shared/data/workExperience';
  import WorkExperience from './components/WorkExperience.svelte';

  import { TEACHING } from '../../shared/data/teaching';

  import { EDUCATION } from '../../shared/data/education';
  import Education from './components/Education.svelte';

  import { AWARDS } from '../../shared/data/awards';
  import Awards from './components/Awards.svelte';

  import { SKILLS } from '../../shared/data/skills';
  import Skills from './components/Skills.svelte';
</script>

<main>
  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <WorkExperience experiences={[...WORK_EXPERIENCE, ...TEACHING]} />
  <Education education={EDUCATION} />
  <Awards awards={AWARDS} />
  <Skills skills={SKILLS} />
</main>
