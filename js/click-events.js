import {
  active,
  dataClose,
  dataDropdown,
  dataDropdownButton,
  isVisible,
  navLink,
} from "./index.js";
import { setActive } from "./helper-functions.js";

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
