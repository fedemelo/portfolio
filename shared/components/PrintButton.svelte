<script lang="ts">
  import { Printer, ZoomIn, ZoomOut } from "lucide-svelte";
  import { print } from "../utils/print";
  import { simulatePageBreaks } from "../utils/simulatePageBreaks";

  let zoom = 1;
  const STEP = 0.1;
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.0;

  function changeZoom(delta: number) {
    zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(zoom + delta).toFixed(1)));
    document.documentElement.style.setProperty('--page-zoom', String(zoom));
    simulatePageBreaks();
  }
</script>

<div class="page-controls">
  <button
    class="page-control-button"
    on:click={() => changeZoom(STEP)}
    disabled={zoom >= MAX_ZOOM}
    title="Zoom in"
  >
    <ZoomIn size={20} />
  </button>
  <button
    class="page-control-button"
    on:click={() => changeZoom(-STEP)}
    disabled={zoom <= MIN_ZOOM}
    title="Zoom out"
  >
    <ZoomOut size={20} />
  </button>
  <button class="page-control-button" on:click={print} title="Print / Save as PDF">
    <Printer size={20} />
  </button>
</div>

<style>
  @import "../styles/PrintButton.css";
</style>
