import {
  closeButtonOnClick,
  documentClickHandler,
  formSubmitHandler,
  inputKeyUpHandler,
  navBarClickHandler,
  phoneOnChangeEventHandler,
} from "./event-handlers.js";
import { populateCities } from "./initialization.js";

export const active = "active";
export const isVisible = "is-visible";
export const dataClose = "[data-close]";
export const dataDropdownButton = `[data-dropdown-button]`;
export const dataDropdown = "[data-dropdown]";
const dataPhone = "data-phone";
const firstNameId = "first-name-input";
const lastNameId = "last-name-input";
const cities = "cities";

const nav = ".nav-js";
export const navLink = ".nav-link";
const navBar = document.querySelector(nav);

export let hasSubmitted = false;
export const setHasSubmitted = (state) => (hasSubmitted = state);

const userForm = document.getElementById("modal-form-js");
export let userInformation = null;
export const setUserInformation = (data) => (userInformation = data);

export const firstNameInput = document.getElementById(firstNameId);
export const lastNameInput = document.getElementById(lastNameId);
export const emailInput = document.getElementById("email-input");
export const cityInput = document.getElementById("city-input");
export const phone1 = document.querySelector(`[${dataPhone}='1']`);
export const phone2 = document.querySelector(`[${dataPhone}='2']`);
export const phone3 = document.querySelector(`[${dataPhone}='3']`);

export const phoneInputs = [phone1, phone2, phone3];
export const setPhoneInputs = (array) =>
  array.forEach((value, index) => (phoneInputs[index].value = value));
export const maxInputLengths = [3, 3, 4];

export const cityDatalist = document.getElementById(cities);

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

phoneInputs.forEach((input, index) => {
  input.addEventListener("keyup", phoneOnChangeEventHandler(index));
});

userForm.addEventListener("submit", formSubmitHandler);

document.addEventListener("click", documentClickHandler);
