class UserInput {}

UserInput.prototype.userText = (userText) => {
  if (userText.length < 3) {
    return false;
  }

  const userTextInput = new RegExp('ABC');

  if (userTextInput.test(userText)) {
    return true;
  }

  return false;
};

module.exports = UserInput;
