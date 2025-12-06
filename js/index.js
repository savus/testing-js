import {
  closeButtonOnClick,
  documentClickHandler,
  formSubmitHandler,
  inputKeyUpHandler,
  navBarClickHandler,
} from "./event-handlers.js";
import { populateCities } from "./initialization.js";

export const active = "active";
export const isVisible = "is-visible";
export const dataClose = "[data-close]";
export const dataDropdownButton = `[data-dropdown-button]`;
export const dataDropdown = "[data-dropdown]";

const nav = ".nav-js";
export const navLink = ".nav-link";
const navBar = document.querySelector(nav);

export let hasSubmitted = false;
export const setHasSubmitted = (state) => (hasSubmitted = state);

const userForm = document.getElementById("modal-form-js");
export let userInformation = null;
export const setUserInformation = (data) => (userInformation = data);

export const firstNameInput = document.getElementById("first-name-input");
export const lastNameInput = document.getElementById("last-name-input");
export const emailInput = document.getElementById("email-input");
export const cityInput = document.getElementById("city-input");

export const cityDatalist = document.getElementById("cities");

export const formInputs = [
  firstNameInput,
  lastNameInput,
  emailInput,
  cityInput,
];

const closeButton = "close-button";
const closeButtons = document.querySelectorAll(`.${closeButton}`);

navBar.addEventListener("click", navBarClickHandler);

closeButtons.forEach((button) => {
  button.addEventListener("click", closeButtonOnClick);
});

populateCities();

formInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    inputKeyUpHandler(input);
  });
});

userForm.addEventListener("submit", formSubmitHandler);

document.addEventListener("click", documentClickHandler);
