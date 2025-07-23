<script lang="ts">
  import type { Publication } from "../../../shared/schemas/publication";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText, getCVText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language } from "../../../shared/schemas/utils";
  
  export let publications: Publication[];
  
  const language = getContext<Language>('language');
</script>

<section>
  <h2>Publications</h2>
  {#each filterForCV(publications) as publication}
    <div class="publication no-break-on-print">
      <p>
        {#each publication.authors as author, index}
          {#if author.isUser}
            <strong>{author.name}</strong>
          {:else}
            {author.name}
          {/if}
          {#if index < publication.authors.length - 1}, {/if}
        {/each}
        
        ({publication.year}). 
        
        "{getLocalizedText(publication.title, language)}". 
        
        <em>{getCVText(publication.description, language)}</em>. 
        
        {publication.institution}. 
        
        {#if publication.url && publication.linkText}
          Available at: <a href={publication.url} target="_blank" rel="noopener noreferrer">{getLocalizedText(publication.linkText, language)}</a>
        {/if}
      </p>
    </div>
  {/each}
</section>

<style>
  @import "../styles/Publications.css";
</style> 