module.exports = {
    "preset": "ts-jest/presets/js-with-ts",
    "testMatch": [
      "**/src/**/*.test.+(ts|tsx)"
    ],
    "collectCoverage": false,
    "collectCoverageFrom": [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/extensions/helloWorld/HelloWorldApplicationCustomizer.ts',
      '!src/**/*.scss.ts',
      '!src/**/Fake*.ts'
    ],
    "reporters": ["default", "jest-junit"],
    "coverageReporters": [
      "json",
      "lcov",
      "text",
      "cobertura"
    ],
    "coverageDirectory": "coverage",
    "moduleNameMapper": {
      "\\.(css|less|scss|sass|resx)$": "identity-obj-proxy",
      "@fluentui/react/lib/(.*)$": "@fluentui/react/lib-commonjs/$1",
      "@pnp/sp": "@pnp/sp-commonjs",
      "@pnp/sp/(.*)$": "@pnp/sp-commonjs/$1",
      "@pnp/graph/(.*)$": "@pnp/graph-commonjs/$1",
      "@pnp/nodejs": "@pnp/nodejs-commonjs"
    },
    setupFiles: ["<rootDir>/setup-jest.js"]
  };
  