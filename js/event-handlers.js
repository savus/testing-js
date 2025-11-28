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
  navLink,
  setHasSubmitted,
  setUserInformation,
  userInformation,
} from "./index.js";
import { setActive } from "./helper-functions.js";
import { showOrRemoveError, validateField } from "./validations.js";

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
    dropdown.classList.remove("active");
  });
};

/* KEYUP */
export const inputKeyUpHandler = (input) => {
  if (hasSubmitted) {
    const { value } = input;
    const name = input.attributes.name.value;
    const isValidField = validateField(name, value);
    showOrRemoveError(input, isValidField);
  }
};

/* SUBMIT */
export const formSubmitHandler = (e) => {
  e.preventDefault();
  setHasSubmitted(true);
  let doBadInputsExist = false;
  formInputs.forEach((input) => {
    const { value } = input;
    const name = input.attributes.name.value;
    const isValidField = validateField(name, value);
    showOrRemoveError(input, isValidField);

    if (!isValidField) doBadInputsExist = true;
  });
  if (!doBadInputsExist) {
    setUserInformation({
      firstNameInput: firstNameInput.value,
      lastNameInput: lastNameInput.value,
      cityInput: cityInput.value,
      emailInput: emailInput.value,
    });
    console.log(userInformation);
  }
};
