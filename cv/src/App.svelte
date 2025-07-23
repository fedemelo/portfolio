<script lang="ts">
  import CV from './CV.svelte';
  import PrintButton from '../../shared/components/PrintButton.svelte';
  import Footer from '../../shared/components/Footer.svelte';
  import { setContext } from 'svelte';
  import type { Language } from '../../shared/schemas/utils';

  const currentLanguage: Language = 'en';
  setContext('language', currentLanguage);
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
  <CV />
  <Footer />
  <PrintButton currentView="cv" />
</div>