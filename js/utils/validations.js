export const patterns = {
  username: /^[a-zA-Z]{2,20}([\s]*)?$/,
  email:
    /^([a-zA-Z\d.-]{2,30})@([a-z.-]{2,8})(\.[a-z]{2,8})(\.[a-z]{2,8})?([\s]*)?$/,
  city: /^[a-zA-Z]{4,15}([\s]*)?$/,
  phone: /^\d{10}$/,
};

export const validateField = (regex, input) => patterns[regex].test(input);

export const showOrRemoveError = (field, isValid) => {
  const parentContainer = field.closest(".text-input");
  if (isValid) parentContainer.classList.remove("invalid");
  else parentContainer.classList.add("invalid");
};
