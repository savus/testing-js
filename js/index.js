import { closeButtonOnClick, navBarHandler } from "./click-events.js";

export const active = "active";
export const isVisible = "is-visible";
export const dataClose = "[data-close]";

const nav = ".nav-js";
export const navLink = ".nav-link";
const navBar = document.querySelector(nav);

const closeButton = "close-button";

const closeButtons = document.querySelectorAll(`.${closeButton}`);

navBar.addEventListener("click", navBarHandler);

closeButtons.forEach((button) => {
  button.addEventListener("click", closeButtonOnClick);
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const dropDownParent = e.target.closest("[data-dropdown]");
  console.log(isDropdownButton, dropDownParent);
  if (!isDropdownButton && dropDownParent != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle(active);
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
