// All physical dimensions in inches. Change here — CSS and screen simulation both update.
const IN_TO_PX = 96; // CSS pixels per inch (spec-defined, device-independent)

export const PAGE = {
  widthIn:  8.5,
  heightIn: 11,
  marginIn: 0.5,
  gapPx:    32,   // visual gap between pages (screen only, not printed)
  screenBackground: '#d0d0d0',
} as const;

export const PAGE_PX = {
  width:  PAGE.widthIn  * IN_TO_PX,
  height: PAGE.heightIn * IN_TO_PX,
  margin: PAGE.marginIn * IN_TO_PX,
} as const;

export function applyPageConfig(): void {
  const root = document.documentElement;
  root.style.setProperty('--page-width',        `${PAGE.widthIn}in`);
  root.style.setProperty('--page-height',        `${PAGE.heightIn}in`);
  root.style.setProperty('--page-margin',        `${PAGE.marginIn}in`);
  root.style.setProperty('--page-gap',           `${PAGE.gapPx}px`);
  root.style.setProperty('--screen-background',  PAGE.screenBackground);

  // CSS custom properties are not supported inside @page rules, so inject it via JS.
  document.getElementById('page-config-style')?.remove();
  const style = document.createElement('style');
  style.id = 'page-config-style';
  style.textContent = `@page { size: ${PAGE.widthIn}in ${PAGE.heightIn}in; margin: ${PAGE.marginIn}in 0; }`;
  document.head.appendChild(style);
}
