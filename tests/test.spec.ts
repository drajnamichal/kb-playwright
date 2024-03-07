import test, { expect } from '../fixtures/basePages';
import { faker } from '@faker-js/faker';
import { verifyCMSCookieLevelValue } from '../helper';

let storageState: any = null;

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await expect.soft(page, 'Verify home page URL').toHaveURL(/cs\/obcane/);
});

test('KB Playwright test', {
  annotation: {
    type: 'test',
    description: 'This test will pass if the user is able to see 10 branches in Kladno.',
  },
  tag: ['@fast'],
}, async ({ 
  page, 
  context,
  homePage, 
  enterpreneursCompaniesPage, 
  profiAccountPage, 
  meetingAtBranchModal, 
  searchBranchModal, 
  selectBranchModal }) => {

  await test.step('Accept cookies', async () => {
    await homePage.acceptCookies();
  });

  await test.step('Wait for the cookies', async () => {
    await page.waitForTimeout(1000);
    storageState = await context.storageState();
  });
  
  await test.step('Verify CMSCookieLevelValue cookie value', async () => {
    await verifyCMSCookieLevelValue(storageState, 'preferential%7Canalytical%7Cmarketing');
  });

  await test.step('Go to enterpreneurs and companies', async () => {
    await homePage.goToEnterpreneursAndCompanies();
  });
  
  await test.step('Verify there is no cookies modal', async () => {
    await expect.soft(homePage.acceptCookiesButton, 'Verify that cookies modal is not visible').not.toBeVisible();
  });

  await test.step('Select products', async () => {
    await enterpreneursCompaniesPage.clickOnProducts();
  });

  await test.step('Select profi account', async () => {
    await enterpreneursCompaniesPage.selectProfiAccount();
    await expect.soft(page, 'Verify the right URL').toHaveURL(/profi-ucet-pro-podnikatele/);
  });

  await test.step('Select I\'m interested', async () => {
    await profiAccountPage.clickOnImInterestedButton();
    await expect.soft(page, 'Verify the right URL').toHaveURL(/profi-ucet-pro-podnikatele#sjednat/);
  });
  
  await test.step('Select order at the branch', async () => {
    await profiAccountPage.selectOrderAtTheBranch();
  });

  await test.step('Enter details', async () => {
    await meetingAtBranchModal.enterName('Ján Srna');
    await meetingAtBranchModal.enterPhone(process.env.MOBILE_NUMBER!);
    await meetingAtBranchModal.enterEmail(faker.internet.email());
  });

  await test.step('Click on continue button', async () => {
    await meetingAtBranchModal.clickOnContinueButton();
  });
  
  await test.step('Search for branches in Kladno', async () => {
    await searchBranchModal.searchForBranch('Kladno');
  });

  await test.step('Select Kladno 1', async () => {
    await searchBranchModal.selectKladno1();
  });

  await test.step('Verify 2 tabs - list and map', async () => {
    await expect(selectBranchModal.listTab, 'Verify list tab is visible').toBeVisible();
    await expect(selectBranchModal.mapTab, 'Verify map tab is visible').toBeVisible();
  });

  await test.step('Show more branches', async () => {
    await selectBranchModal.showMoreBranches();
  });
  
  await test.step('Verify there are 10 branches', async () => {
    await expect(selectBranchModal.branchOptions, 'Verify 10 branches').toHaveCount(10);
  });
});
