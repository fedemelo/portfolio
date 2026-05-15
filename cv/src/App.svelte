<script lang="ts">
  import { setContext } from 'svelte';
  import type { Language } from '../../shared/schemas/utils';
  import DocumentPage from '../../shared/components/DocumentPage.svelte';
  import CV from './CV.svelte';

  setContext<Language>('language', 'en');
</script>

<DocumentPage>
  <CV />
</DocumentPage>
