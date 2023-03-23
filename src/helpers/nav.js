import { dark, light, colorTheme } from './constants';

const handleTheme = () => {
  const currentlyDark = document.documentElement.classList.contains(dark);
  document.documentElement.classList.toggle(dark);
  localStorage.setItem(colorTheme, currentlyDark ? light : dark);
};

const themeToggleBtns = document.querySelectorAll('.theme-toggle');

themeToggleBtns.forEach((btn) => btn.addEventListener('click', handleTheme));

const modal = document.querySelector('#dialog');
const openBtn = document.querySelector('#open-dialog');
const closeBtn = document.querySelector('#close-dialog');

closeBtn.addEventListener('click', () => {
  modal.hidden = true;
  modal.open = true;
});

openBtn.addEventListener('click', () => {
  modal.open = true;
  modal.hidden = false;
});
