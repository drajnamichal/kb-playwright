import { Locator, Page } from '@playwright/test';

export class EnterpreneursCompaniesPage {
  page: Page;
  products: Locator;
  profiAccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.getByText('Produkty');
    this.profiAccount = page.getByRole('link', { name: 'Profi účet', exact: true });
  }

  async clickOnProducts() {
    await this.products.click();
  }

  async selectProfiAccount() {
    await this.profiAccount.click();
  }
}