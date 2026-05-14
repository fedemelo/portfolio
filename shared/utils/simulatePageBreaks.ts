import { PAGE, PAGE_PX } from '../config/page';

export function simulatePageBreaks(): void {
  const main = document.querySelector('main');
  if (!main) return;

  main.querySelectorAll('.page-sep').forEach(el => el.remove());
  main.style.removeProperty('min-height');
  main.style.removeProperty('margin-bottom');

  const { height: pageHeight, margin: pageMargin } = PAGE_PX;
  const totalGap = PAGE.gapPx + 2 * pageMargin;

  // CSS zoom scales getBoundingClientRect values — divide to get logical px
  const zoom = parseFloat(document.documentElement.style.getPropertyValue('--page-zoom') || '1') || 1;

  const mainTop = main.getBoundingClientRect().top;
  const atomics = Array.from(
    main.querySelectorAll('.no-break-on-print, h1, h2')
  ) as HTMLElement[];

  const measurements = atomics.map(el => ({
    el,
    top: (el.getBoundingClientRect().top - mainTop) / zoom,
  }));

  let gapsInserted = 0;
  let currentPage = 0;

  for (const { el, top } of measurements) {
    const adjustedTop = top + gapsInserted * totalGap;
    const pageBottom = (currentPage + 1) * pageHeight - pageMargin;

    if (adjustedTop > pageBottom) {
      const sep = document.createElement('div');
      sep.className = 'page-sep';
      el.before(sep);
      gapsInserted++;
      currentPage++;
    }
  }

  const logicalHeight = (gapsInserted + 1) * pageHeight + gapsInserted * totalGap;
  main.style.minHeight = `${logicalHeight}px`;
  // transform: scale() doesn't affect layout — push the footer to the visual bottom
  main.style.marginBottom = `${logicalHeight * (zoom - 1)}px`;
}

