module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  }
}