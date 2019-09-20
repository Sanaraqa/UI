module.exports = {
  variableLocatorsLogin: {
    elementEmailInput: "#inputEmail",
    elementEmailPassword: "#inputPassword",
    pressEnter: "button[type=submit]"
  },

  loginCorrect() {
    browser.url("/login");
    $(this.variableLocatorsLogin.elementEmailInput).setValue(
      ""
    );
    $(this.variableLocatorsLogin.elementEmailPassword).setValue("Qwer!@#");
    $(this.variableLocatorsLogin.pressEnter).click();
  }
};
