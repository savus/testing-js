export const patterns = {
  username: /^[a-zA-Z]{2,20}$/,
  email: /^([a-zA-Z\d.-]{2,30})@([a-z.-]{2,8})(\.[a-z]{2,8})(\.[a-z]{2,8})?$/,
  city: /^[a-zA-Z]{4,15}$/,
};

export const validate = (regex, field) => {
  const inputContainer = field.closest(".text-input");
  if (regex.test(field.value)) {
    inputContainer.classList.remove("invalid");
    return;
  } else {
    inputContainer.classList.add("invalid");
    return;
  }
};
