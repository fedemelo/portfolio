<script lang="ts">
  import { PERSONAL_INFO } from '../../shared/data/personalInfo';
  import PersonalInfo from './sections/PersonalInfo.svelte';

  import { RESEARCH_INTERESTS } from '../../shared/data/researchInterests';
  import ResearchInterests from './sections/ResearchInterests.svelte';

  import { EDUCATION } from '../../shared/data/education';
  import Education from './sections/Education.svelte';

  import { AWARDS } from '../../shared/data/awards';
  import Awards from './sections/Awards.svelte';

  import { EXTRACURRICULARS } from '../../shared/data/extracurricular';
  import Extracurricular from './sections/Extracurricular.svelte';

  import { RELEVANT_COURSEWORK } from '../../shared/data/relevantCoursework';
  import RelevantCoursework from './sections/RelevantCoursework.svelte';

  import { WORK_EXPERIENCE } from '../../shared/data/workExperience';
  import WorkExperience from './sections/WorkExperience.svelte';

  import { TEACHING } from '../../shared/data/teaching';
  import Teaching from './sections/Teaching.svelte';

  import { COURSES } from '../../shared/data/courses';

  import { SKILLS } from '../../shared/data/skills';
  import Skills from './sections/Skills.svelte';

  import { PUBLICATIONS } from '../../shared/data/publications';
  import Publications from './sections/Publications.svelte';
</script>

<main>
  <PersonalInfo personalInfo={PERSONAL_INFO} />
  <ResearchInterests researchInterests={RESEARCH_INTERESTS} />
  <Education education={EDUCATION} />
  <Awards awards={AWARDS} />
  <WorkExperience workExperience={WORK_EXPERIENCE} />
  <Teaching teaching={TEACHING} courses={COURSES} />
  <Publications publications={PUBLICATIONS} />
  <RelevantCoursework relevantCoursework={RELEVANT_COURSEWORK} />
  <Skills skills={SKILLS} />
  <Extracurricular extracurriculars={EXTRACURRICULARS} />
</main>