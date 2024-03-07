import dotenv from 'dotenv';

// Function to check if the TEST_ENV variable is set
function getTestEnv(): string | undefined {
  return process.env.TEST_ENV;
}

// Load the appropriate .env file based on TEST_ENV
function loadEnvFile() {
  const testEnv = getTestEnv();

  if (testEnv) {
    // If TEST_ENV is defined, load .env.test1 or .env.test2 based on the value
    const testEnvPath = `.env.${testEnv.toLowerCase()}`;
    dotenv.config({ path: testEnvPath });

    // Replace BASE_URL with appropriate test environment URL
    process.env.BASE_URL = process.env[`${testEnv.toUpperCase()}_BASE_URL`];
  } else {
    // If TEST_ENV is not defined, use default .env file
    dotenv.config();
  }
}

// Main function for globalSetup
async function globalSetup() {
  loadEnvFile();
}

export default globalSetup;
