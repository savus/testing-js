import { setActive } from "./modules/helper-functions.js";

export const active = "active";
const isVisible = "is-visible";
const closeButton = "close-button";

const nav = ".nav-js";
const navBar = document.querySelector(nav);

const closeButtons = document.querySelectorAll(`.${closeButton}`);

navBar.addEventListener("click", ({ target }) => {
  const isLink = target.matches(".nav-link");
  if (isLink) {
    const elementToOpen = document.getElementById(target.dataset.open);
    elementToOpen?.classList.add(isVisible);
    setActive(`.nav-link`, target);
  }
});

closeButtons.forEach((button) => {
  button.addEventListener("click", ({ target }) => {
    const parentToClose = target.closest("[data-close]");
    parentToClose.classList.remove(isVisible);
  });
});
