import {
  closeButtonOnClick,
  documentClickHandler,
  navBarClickHandler,
} from "./click-events.js";
import { patterns, showOrRemoveError, validateField } from "./validations.js";

export const active = "active";
export const isVisible = "is-visible";
export const dataClose = "[data-close]";
export const dataDropdownButton = `[data-dropdown-button]`;
export const dataDropdown = "[data-dropdown]";

const nav = ".nav-js";
export const navLink = ".nav-link";
const navBar = document.querySelector(nav);

let hasSubmitted = false;
const userForm = document.getElementById("modal-form-js");
const formInputs = document.querySelectorAll("#modal-form-js [data-pattern]");

const closeButton = "close-button";
const closeButtons = document.querySelectorAll(`.${closeButton}`);

navBar.addEventListener("click", navBarClickHandler);

closeButtons.forEach((button) => {
  button.addEventListener("click", closeButtonOnClick);
});

formInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    if (hasSubmitted) {
      const isFieldValid = validateField(
        e.target.dataset.pattern,
        e.target.value
      );
      showOrRemoveError(e.target, isFieldValid);
    }
  });
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  hasSubmitted = true;
  formInputs.forEach((input) => {
    const isFieldValid = validateField(input.dataset.pattern, input.value);
    showOrRemoveError(input, isFieldValid);
  });
  if (!document.querySelector(".invalid")) console.log("success");
});

document.addEventListener("click", documentClickHandler);
