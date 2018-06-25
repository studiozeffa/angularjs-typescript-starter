module.exports = {
  preset: "jest-puppeteer",
  globalSetup: './e2e/setup.js',
  globalTeardown: './e2e/teardown.js',
  testEnvironment: './e2e/environment.js',
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "./e2e/tests/.*.ts$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  server: {
    command: "npm start"
  }
}