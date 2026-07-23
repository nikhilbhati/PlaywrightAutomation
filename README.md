# Playwright Testing Project

This project is set up for automated testing using Playwright. It includes a test suite, utility functions, and configuration files for TypeScript and Playwright.

## Project Structure

```
playwright-testing-project
├── tests
│   ├── example.spec.ts       # Test suite for Playwright
│   └── helpers
│       └── utils.ts          # Utility functions for tests
├── playwright.config.ts       # Playwright configuration file
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd playwrightAutomation
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the tests:
   ```
   npx playwright test
   ```

## Usage Examples

- Add your test cases in the `tests/example.spec.ts` file.
- Use utility functions from `tests/helpers/utils.ts` to assist with your tests.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.