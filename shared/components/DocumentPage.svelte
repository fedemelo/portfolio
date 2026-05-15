<script lang="ts">
  import { onMount } from 'svelte';
  import PrintButton from './PrintButton.svelte';
  import Footer from './Footer.svelte';
  import { simulatePageBreaks } from '../utils/simulatePageBreaks';
  import { applyPageConfig } from '../config/page';

  onMount(() => {
    applyPageConfig();
    simulatePageBreaks();

    const main = document.querySelector('main')!;
    let rafId: number | null = null;
    const observer = new ResizeObserver(() => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = null;
        simulatePageBreaks();
      });
    });
    observer.observe(main);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  });
</script>

<div style="display: flex; flex-direction: column; align-items: center;">
  <slot />
  <Footer />
  <PrintButton />
</div>
