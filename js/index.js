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
