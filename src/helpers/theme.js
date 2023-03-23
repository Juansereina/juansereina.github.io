const dark = 'dark';
const light = 'light';
const colorTheme = 'color-theme';
const currentColorTheme = localStorage.getItem(colorTheme);
const scheme = `(prefers-color-scheme: ${dark})`;
const isDarkSysPreference = window.matchMedia(scheme).matches;
const preferedDark = currentColorTheme === dark;
const isDark = currentColorTheme ? preferedDark : isDarkSysPreference;

document.documentElement.classList.toggle(dark, isDark);

if (!currentColorTheme) {
  localStorage.setItem(colorTheme, isDarkSysPreference ? dark : light);
}
