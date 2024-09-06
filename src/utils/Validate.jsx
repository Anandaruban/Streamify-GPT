export const checkValidation = (email, password) => {

  const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  const validPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

  if(!validEmail) return "Please enter a valid email address.";
  if(!validPassword) return "Incorrect password, reset your password or try again.";

  return null;
}