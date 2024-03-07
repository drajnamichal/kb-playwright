import { Locator, Page } from '@playwright/test';

export class MeetingAtBranchModal {
  page: Page;
  nameInput: Locator;
  phoneInput: Locator;
  emailInput: Locator;
  continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder('Karel Novák');
    this.phoneInput = page.locator('#phoneNumber');
    this.emailInput = page.locator('//input[@formcontrolname="email"]');
    this.continueButton = page.getByText('Pokračovat');
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterPhone(phone: string) {
    await this.phoneInput.fill(phone);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
    await this.page.waitForLoadState('load');
  }

  async clickOnContinueButton() {
    await this.page.waitForTimeout(1000);
    await this.continueButton.click();
  }
}