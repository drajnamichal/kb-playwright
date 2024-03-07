import { Locator, Page } from '@playwright/test';

export class SelectBranchModal {
  page: Page;
  listTab: Locator;
  mapTab: Locator;
  showMoreButton: Locator;
  branchOptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listTab = page.getByTestId('tab-list');
    this.mapTab = page.getByTestId('tab-map');
    this.showMoreButton = page.getByText('Načíst další');
    this.branchOptions = page.locator("//button[contains(@class, 'branchOption')]");
  }

  async showMoreBranches() {
    await this.showMoreButton.click();
  }
}