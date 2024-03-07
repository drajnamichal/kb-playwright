import { Locator, Page } from '@playwright/test';

export class ProfiAccountPage {
  page: Page;
  imInterestedButton: Locator;
  orderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.imInterestedButton = page.getByText('Mám zájem');
    this.orderButton = page.getByText('Objednat');
  }

  async clickOnImInterestedButton() {
    await this.imInterestedButton.click();
  }

  async selectOrderAtTheBranch() {
    await this.orderButton.click();
    await this.page.waitForLoadState('load');
  }
}