import { test as baseTest } from '@playwright/test';

import { HomePage } from '../page-objects/HomePage';
import { EnterpreneursCompaniesPage } from '../page-objects/EnterpreneursCompaniesPage';
import { ProfiAccountPage } from '../page-objects/ProfiAccountPage';
import { MeetingAtBranchModal } from '../page-objects/components/MeetingAtBranchModal';
import { SearchBranchModal } from '../page-objects/components/SearchBranchModal';
import { SelectBranchModal } from '../page-objects/components/SelectBranchModal';

const test = baseTest.extend<{
  homePage: HomePage;
  enterpreneursCompaniesPage: EnterpreneursCompaniesPage;
  profiAccountPage: ProfiAccountPage;
  meetingAtBranchModal: MeetingAtBranchModal;
  searchBranchModal: SearchBranchModal;
  selectBranchModal: SelectBranchModal;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  enterpreneursCompaniesPage: async ({ page }, use) => {
    await use(new EnterpreneursCompaniesPage(page));
  },
  profiAccountPage: async ({ page }, use) => {
    await use(new ProfiAccountPage(page));
  },
  meetingAtBranchModal: async ({ page }, use) => {
    await use(new MeetingAtBranchModal(page));
  },
  searchBranchModal: async ({ page }, use) => {
    await use(new SearchBranchModal(page));
  },
  selectBranchModal: async ({ page }, use) => {
    await use(new SelectBranchModal(page));
  },
});

export default test;
export const { expect } = test;