import { Locator, Page } from '@playwright/test';

export class HomePage {
  page: Page;
  acceptCookiesButton: Locator;
  declineCookiesButton: Locator;
  closeCookiesButton: Locator;
  enterpreneursAndCompaniesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByTestId('cookie-bar-accept-all');
    this.declineCookiesButton = page.getByTestId('cookie-bar-decline-all');
    this.closeCookiesButton = page.getByTestId('cookie-bar-close');
    this.enterpreneursAndCompaniesButton = page.getByRole('link', { name: 'Podnikatelé a firmy' });
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async declineCookies() {
    await this.declineCookiesButton.click();
  }

  async closeCookies() {
    await this.closeCookiesButton.click();
  }

  async goToEnterpreneursAndCompanies() {
    await this.enterpreneursAndCompaniesButton.first().click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}