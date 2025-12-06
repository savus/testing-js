import {
  active,
  cityInput,
  dataClose,
  dataDropdown,
  dataDropdownButton,
  emailInput,
  firstNameInput,
  formInputs,
  hasSubmitted,
  isVisible,
  lastNameInput,
  maxInputLengths,
  navLink,
  phone1,
  phone2,
  phoneInputs,
  setHasSubmitted,
  setUserInformation,
  userInformation,
} from "./index.js";
import { setActive } from "./helper-functions.js";
import { showOrRemoveError, validateField } from "./utils/validations.js";

/* ClICK */
export const navBarClickHandler = ({ target }) => {
  const isLink = target.matches(navLink);
  if (isLink) {
    const elementToOpen = document.getElementById(target.dataset.open);
    elementToOpen?.classList.add(isVisible);
    setActive(navLink, target);
  }
};

export const closeButtonOnClick = ({ target }) => {
  const parentToClose = target.closest(dataClose);
  parentToClose.classList.remove(isVisible);
};

export const documentClickHandler = ({ target }) => {
  const isDropdownButton = target.matches(dataDropdownButton);
  const dropDownParent = target.closest(dataDropdown);
  if (!isDropdownButton && dropDownParent != null) return;

  if (isDropdownButton) {
    dropDownParent.classList.toggle(active);
  }

  document.querySelectorAll(`${dataDropdown}.${active}`).forEach((dropdown) => {
    if (dropdown === dropDownParent) return;
    dropdown.classList.remove(active);
  });
};

/* KEYUP */

const handleInputValidation = (input) => {
  const { value } = input;
  const name = input.attributes.name.value;
  const isValidField = validateField(name, value);
  showOrRemoveError(input, isValidField);
  return isValidField;
};

export const inputKeyUpHandler = (input) => {
  if (hasSubmitted) handleInputValidation(input);
};

export const phoneOnChangeEventHandler = (index) => (e) => {
  const value = e.target.value;
  const currentMaxLength = maxInputLengths[index];
  const nextInput =
    index < phoneInputs.length - 1
      ? phoneInputs[index + 1]
      : phoneInputs[index];
  const prevInput = index > 0 ? phoneInputs[index - 1] : phoneInputs[index];
  const shouldGoToNextInput = value.length === currentMaxLength;
  const shouldGoToPrevInput = value.length === 0;
  const joinedInputs = phoneInputs.map((input) => input.value).join("");
  const isValidField = validateField("phone", joinedInputs);

  if (shouldGoToNextInput) {
    nextInput.focus();
  }

  if (shouldGoToPrevInput) {
    prevInput.focus();
  }

  if (hasSubmitted) {
    showOrRemoveError(e.target, isValidField);
    if (isValidField) return true;
  }

  return false;
};

/* SUBMIT */
export const formSubmitHandler = (e) => {
  let doBadInputsExist = false;
  e.preventDefault();
  setHasSubmitted(true);

  formInputs.forEach((input) => {
    if (!handleInputValidation(input)) doBadInputsExist = true;
  });

  if (!doBadInputsExist) {
    setUserInformation({
      firstNameInput: firstNameInput.value.trim(),
      lastNameInput: lastNameInput.value.trim(),
      cityInput: cityInput.value.trim(),
      emailInput: emailInput.value.trim(),
      phoneInput: phoneInputs.map((input) => input.value).join(""),
    });
    console.log(userInformation);
  }
};
