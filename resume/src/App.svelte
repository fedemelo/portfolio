<script lang="ts">
  import { onMount } from 'svelte';
  import Resume from './Resume.svelte';
  import PrintButton from '../../shared/components/PrintButton.svelte';
  import Footer from '../../shared/components/Footer.svelte';
  import { setContext } from 'svelte';
  import type { Language } from '../../shared/schemas/utils';
  import { simulatePageBreaks } from '../../shared/utils/simulatePageBreaks';
  import { applyPageConfig } from '../../shared/config/page';

  const currentLanguage: Language = 'en';
  setContext('language', currentLanguage);

  onMount(() => {
    applyPageConfig();
    document.fonts.ready.then(() => simulatePageBreaks());
  });
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
  <Resume />
  <Footer />
  <PrintButton />
</div>
