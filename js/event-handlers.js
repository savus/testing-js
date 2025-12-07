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
  phoneInputs,
  setHasSubmitted,
  setPhoneInputs,
  setUserInformation,
  userInformation,
} from "./index.js";
import { clearFormValues, setActive } from "./helper-functions.js";
import {
  isPhoneValid,
  showOrRemoveError,
  validateField,
} from "./utils/validations.js";

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

const handleInputValidation = (inputField) => {
  const { value } = inputField;
  const name = inputField.attributes.name.value;
  const isValidField = validateField(name, value);
  showOrRemoveError(inputField, isValidField);
  return isValidField;
};

export const inputKeyUpHandler = (inputField) => {
  if (hasSubmitted) handleInputValidation(inputField);
};

export const phoneOnChangeEventHandler = (index) => (e) => {
  const value = e.target.value;
  const keyPressed = e.code;
  const isArrowKeyPressed =
    keyPressed === "ArrowRight" ||
    keyPressed === "ArrowLeft" ||
    keyPressed === "ArrowDown" ||
    keyPressed === "ArrowUp" ||
    keyPressed === "Space";
  const currentMaxLength = maxInputLengths[index];
  const nextInput =
    index < phoneInputs.length - 1
      ? phoneInputs[index + 1]
      : phoneInputs[index];
  const prevInput = index > 0 ? phoneInputs[index - 1] : phoneInputs[index];
  const shouldGoToNextInput = value.length === currentMaxLength;
  const shoudlGoToPrevInput = value.length === 0;

  const newState = phoneInputs.map((phoneInputField, phoneInputIndex) =>
    index === phoneInputIndex ? value : phoneInputField.value
  );

  if (hasSubmitted) isPhoneValid();

  if (shouldGoToNextInput && !isArrowKeyPressed) {
    nextInput.focus();
  }

  if (shoudlGoToPrevInput && !isArrowKeyPressed) {
    prevInput.focus();
  }

  setPhoneInputs(newState);
};

/* SUBMIT */
export const formSubmitHandler = (e) => {
  let doBadInputsExist = false;
  e.preventDefault();
  setHasSubmitted(true);

  formInputs.forEach((input) => {
    if (!handleInputValidation(input)) doBadInputsExist = true;
  });

  if (!isPhoneValid()) doBadInputsExist = true;

  if (!doBadInputsExist) {
    setUserInformation({
      firstNameInput: firstNameInput.value.trim(),
      lastNameInput: lastNameInput.value.trim(),
      cityInput: cityInput.value.trim(),
      emailInput: emailInput.value.trim(),
      phoneInput: phoneInputs.map((input) => input.value).join(""),
    });
    clearFormValues();
    console.log(userInformation);
  }
};
