const locator = require('../locator/locator.json');

export class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(locator.username);     // Replace with locator.username
    this.passwordInput = page.locator(locator.password);     // Replace with locator.password
    this.submitButton = page.locator(locator.Submit);       // Replace with locator.Submit
    this.resultText = page.locator(locator.result_txt);            // Replace with locator.result_txt
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getSuccessMessage() {
    return await this.resultText.innerText();
  }
}
