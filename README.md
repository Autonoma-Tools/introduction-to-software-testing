# Introduction to Software Testing

Companion code for Autonoma's **Introduction to Software Testing** course. Each top-level folder maps to one chapter on [getautonoma.com/blog](https://getautonoma.com/blog) and holds the runnable files referenced inline in that post.

## Course chapters

1. [Software Testing Basics for Beginners](https://getautonoma.com/blog/software-testing-basics-introduction) — [`software-testing-basics-introduction/`](./software-testing-basics-introduction)
2. [Testing Terminology Every QA Should Know](https://getautonoma.com/blog/software-testing-terminology-guide) — [`software-testing-terminology-guide/`](./software-testing-terminology-guide)
3. [Plan and Organize Tests: A Workflow](https://getautonoma.com/blog/test-planning-organization-workflow) — [`test-planning-organization-workflow/`](./test-planning-organization-workflow)
4. [Test Automation Frameworks Compared](https://getautonoma.com/blog/test-automation-frameworks-guide) — [`test-automation-frameworks-guide/`](./test-automation-frameworks-guide)
5. [Test Automation: Python & JS Setup Guide](https://getautonoma.com/blog/test-automation-implementation-python-javascript) — [`test-automation-implementation-python-javascript/`](./test-automation-implementation-python-javascript)
6. [Page Object Model: Test Automation Guide](https://getautonoma.com/blog/page-object-model-test-architecture) — [`page-object-model-test-architecture/`](./page-object-model-test-architecture)
7. [Reduce Test Flakiness: Best Practices](https://getautonoma.com/blog/reduce-test-flakiness-best-practices) — [`reduce-test-flakiness-best-practices/`](./reduce-test-flakiness-best-practices)
8. [AI-Powered Testing with Autonoma](https://getautonoma.com/blog/ai-powered-software-testing-autonoma) — [`ai-powered-software-testing-autonoma/`](./ai-powered-software-testing-autonoma)

## Requirements

- **Node.js 18+** for the TypeScript / JavaScript examples (Playwright, Jest, WebdriverIO).
- **Python 3.10+** for the Python examples (pytest, pytest-playwright, Selenium).

Each chapter's snippet is self-contained and meant to be read alongside its post. These are teaching examples, not a single installable project — copy the file you need into your own project and adapt the selectors, URLs, and credentials.

## Project structure

```
introduction-to-software-testing/
├── software-testing-basics-introduction/
│   └── send-money.test.js
├── software-testing-terminology-guide/
│   ├── tdd_calculate_discount_test.py
│   ├── tdd-calculate-discount.test.js
│   └── user-login.feature
├── test-planning-organization-workflow/
│   └── test-case-template.json
├── test-automation-frameworks-guide/
│   ├── playwright/
│   │   ├── login.spec.ts
│   │   └── setup-teardown.spec.ts
│   ├── selenium/
│   │   └── test_login.py
│   ├── appium/
│   │   └── mobile-login.test.js
│   └── ci/
│       └── e2e.yml
├── test-automation-implementation-python-javascript/
│   ├── python/
│   │   ├── pytest.ini
│   │   ├── requirements.txt
│   │   ├── tests/test_login.py
│   │   └── ci/playwright-tests.yml
│   └── typescript/
│       ├── playwright.config.ts
│       ├── tests/login.spec.ts
│       └── ci/playwright-tests.yml
├── page-object-model-test-architecture/
│   ├── typescript/
│   │   ├── pages/BasePage.ts
│   │   ├── pages/LoginPage.ts
│   │   ├── components/Navigation.ts
│   │   └── tests/authentication.spec.ts
│   └── python/
│       ├── pages/login_page.py
│       └── config/settings.py
├── reduce-test-flakiness-best-practices/
│   ├── python/
│   │   ├── conftest.py
│   │   └── stable_login_test.py
│   └── typescript/
│       └── login-helper.ts
└── ai-powered-software-testing-autonoma/
    └── brittle-checkout.spec.ts
```

> The `ci/` folders hold GitHub Actions workflow examples as reference material. They live under each chapter (not `.github/workflows/`) so they document the pipeline without running as this repository's own CI.

## About

This repository is maintained by [Autonoma](https://getautonoma.com) as reference material for the linked course. Autonoma builds autonomous AI agents that plan, execute, and maintain end-to-end tests directly from your codebase.

If something here is wrong, out of date, or unclear, please [open an issue](https://github.com/Autonoma-Tools/introduction-to-software-testing/issues/new).

## License

Released under the [MIT License](./LICENSE) © 2026 Autonoma Labs.
