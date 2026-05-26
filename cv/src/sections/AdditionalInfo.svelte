<script lang="ts">
  import type { Language } from "../../../shared/schemas/language";
  import { filterForCV } from "../../../shared/utils/show";
  import { getLocalizedText } from "../../../shared/utils/localization";
  import { getContext } from 'svelte';
  import type { Language as LanguageCode } from "../../../shared/schemas/utils";

  export let languages: Language[];

  const language = getContext<LanguageCode>('language');

  function formatLanguage(lang: Language): string {
    const cert = lang.certifications?.find(c => c.showInCV !== false);
    if (cert) {
      const [score] = cert.grade.split('/');
      return `${getLocalizedText(lang.name, language)} (${getLocalizedText(cert.name, language)} ${score} / CEFR ${cert.cefrLevel})`;
    }
    return `${getLocalizedText(lang.name, language)} (${getLocalizedText(lang.proficiency, language).toLowerCase()})`;
  }
</script>

<section>
  <h2>Additional Information</h2>
  <div class="indented-block">
    <p>
      <strong>Languages:</strong>
      {filterForCV(languages).map(formatLanguage).join(', ')}
    </p>
  </div>
</section>
