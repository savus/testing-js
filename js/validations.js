export const patterns = {
  username: /^[a-zA-Z]{2,20}$/,
  email: /^([a-zA-Z\d.-]{2,30})@([a-z.-]{2,8})(\.[a-z]{2,8})(\.[a-z]{2,8})?$/,
  city: /^[a-zA-Z]{4,15}$/,
};

export const validateField = (regex, input) => patterns[regex].test(input);

export const showOrRemoveError = (field, isValid) => {
  const parentContainer = field.closest(".text-input");
  if (isValid) parentContainer.classList.remove("invalid");
  else parentContainer.classList.add("invalid");
};
