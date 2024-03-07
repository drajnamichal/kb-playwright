export async function verifyCMSCookieLevelValue(storageState: { cookies: any; origins?: { origin: string; localStorage: { name: string; value: string; }[]; }[]; }, expectedValue: string) {
  const cmsCookieLevelValue = storageState.cookies.find((cookie: { name: string; }) => cookie.name === 'CMSCookieLevelValue');
  if (!cmsCookieLevelValue || cmsCookieLevelValue.value !== expectedValue) {
    throw new Error(`CMSCookieLevelValue validation failed. Expected: ${expectedValue}, Found: ${cmsCookieLevelValue ? cmsCookieLevelValue.value : 'Cookie not found'}`);
  }
  console.log(`CMSCookieLevelValue has the correct value: ${cmsCookieLevelValue.value}`);
}
