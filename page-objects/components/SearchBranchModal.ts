import { Locator, Page } from '@playwright/test';

export class SearchBranchModal {
  page: Page;
  locationSearchInput: Locator;
  kladno1Option: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationSearchInput = page.locator('//input[@formcontrolname="locationSearch"]');
    this.kladno1Option = page.getByText('Kladno 1');
  }

  async searchForBranch(city: string) {
    await this.locationSearchInput.fill(city);
  }

  async selectKladno1() {
    await this.kladno1Option.click();
  }
}