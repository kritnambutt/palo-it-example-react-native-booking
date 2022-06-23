export function validateEmail(value: String): boolean {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var checkValid = value.match(validRegex) ? true : false;
  return checkValid;
}

export function validatePassword(value: String): boolean {
  return value.length >= 8 ? true : false;
}
