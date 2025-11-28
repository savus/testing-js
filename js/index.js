import {
  closeButtonOnClick,
  documentClickHandler,
  navBarClickHandler,
} from "./click-events.js";
import { patterns } from "./validations.js";

export const active = "active";
export const isVisible = "is-visible";
export const dataClose = "[data-close]";
export const dataDropdownButton = `[data-dropdown-button]`;
export const dataDropdown = "[data-dropdown]";

const nav = ".nav-js";
export const navLink = ".nav-link";
const navBar = document.querySelector(nav);

const hasSubmitted = false;
const userForm = document.getElementById("modal-form-js");
const formInputs = document.querySelectorAll("#modal-form-js [data-pattern]");

console.log(formInputs);

const closeButton = "close-button";
const closeButtons = document.querySelectorAll(`.${closeButton}`);

navBar.addEventListener("click", navBarClickHandler);

closeButtons.forEach((button) => {
  button.addEventListener("click", closeButtonOnClick);
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  hasSubmitted = true;
});

formInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const { target } = e;
    const { value } = e.target;
  });
});

document.addEventListener("click", documentClickHandler);
