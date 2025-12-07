import { active, formInputs, phoneInputs, searchInput } from "./index.js";

export const setActive = (selector, element) => {
  const activeElement = document.querySelector(`${selector}.${active}`);
  if (activeElement !== null) activeElement.classList.remove(active);
  element.classList.add(active);
};

export const clearPhoneInputs = () => {
  phoneInputs.forEach((input) => (input.value = ""));
};

export const clearFormValues = () => {
  formInputs.forEach((inputField) => (inputField.value = ""));
  clearPhoneInputs();
};

export const getJoinedPhoneInput = (inputs) =>
  inputs.map((input) => input.value).join("");

export const clearSearchInput = () => {
  searchInput.value = "";
};
