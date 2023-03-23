import { stripLangFromSlug } from './route';

const selects = document.querySelectorAll('.lang-select');

selects.forEach((select) => {
  select?.addEventListener('change', function (e) {
    const selectedLang = e.target?.value || 'en';

    const { pathname } = window.location;
    const path = stripLangFromSlug(pathname);
    const isEmpty = path.length == 0;
    const newPath = isEmpty ? `/${selectedLang}` : `/${selectedLang}/${path}`;

    window.location.replace(newPath);
  });
});
