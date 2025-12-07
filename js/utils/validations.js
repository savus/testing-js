import { phoneInputs } from "../index.js";

export const patterns = {
  username: /^[a-zA-Z]{2,20}([\s]*)?$/,
  email: /^([a-zA-Z\d.-]+)@([a-z.-]+)(\.[a-z]{2,8})(\.[a-z]{2,8})?([\s]*)?$/,
  city: /^([a-zA-Z]+)([\s]*)?$/,
  phone: /^\d{10}$/,
};

export const validateField = (regex, inputValue) =>
  patterns[regex].test(inputValue);

export const showOrRemoveError = (inputField, isValid) => {
  const parentContainer = inputField.closest(".text-input");
  if (isValid) parentContainer.classList.remove("invalid");
  else parentContainer.classList.add("invalid");
};

export const isPhoneValid = () => {
  const concatPhoneInput = phoneInputs
    .map((inputField) => inputField.value)
    .join("");
  const isValid = validateField("phone", concatPhoneInput);
  showOrRemoveError(phoneInputs[0], isValid);
  return isValid;
};
