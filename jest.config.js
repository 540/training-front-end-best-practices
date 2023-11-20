const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    testRegex: [
        '(?<!integration)\\.test\\.(ts|js)$',
        '\\.test\\.(tsx)$',
        '\\.integration\\.test\\.ts$',
    ],
    setupFilesAfterEnv: ['./jest.setup.unit.js'],
};

module.exports = createJestConfig(customJestConfig);
