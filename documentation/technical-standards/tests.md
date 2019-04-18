# [Standard] Tests

## Why is testing your code so important ?

Testing serves several purposes:

- Making sure your code does what it is intended to (by writing new tests)
- Making sure you know exactly the impact of your changes on the whole project (by looking at broken tests)
- Allow new developers to easily understand what your code is supposed to do, especially on edge cases (sometimes just reading test titles can give a pretty good idea of the code features)

And with a good variety of tests:

- Bugs are detected earlier in the development process
  - Because you don't need to wait for a specific situation to happen in real life to see the bug happen.
- You will write better code
  - Because you will be forced to think of all possible edge cases, leaving no place for undefined behavior.
- Other developers will be more confident working on your project
  - Because a wide test coverage reveals more breaking changes, even in the parts of the code you have zero knowledge about.

## What tests for what end ?

There are many test types out there.

### Unit tests

Unit tests are used to test small piece of code (called units), usually a function or a class, so that most of the time spent fixing the code is not used to find the source of the problem.

They must be:

- reliable => a failing unit test is ALWAYS a problem in the code (and not something like "Oh it's a CI problem")
- fast to run => because they will be run many time when developing, so long tests causes slower development
- runnable without any external services, so if your tested function calls one, you must add a mock up for that service

According to Google, unit tests should represent 70% of your test base.

What is considered as a unit test:

- Tests of any [pure function](https://en.wikipedia.org/wiki/Pure_function)
- Tests of unpure functions where external effects are mocked
- Tests of functions not calling any other part of your code

If you rely on something external to your application (like with the `moment` module), use a mock-up.

### Integration tests

Same as unit tests, but testing several units working together.

According to Google, integration tests should represent 20% of your test base.

What is considered as a integration test:

- Tests of any function in your code not covered by unit tests (but still mocking the use of external services)

### End-to-end tests

These ones will test all of your code working together, with real external services in use. They are very nice to see which features works and which are broken by your current changes.

According to Google, E2E tests should represent 10% of your test base.

What is considered as an end-to-end test:

- Tests running your main functions with every real external services being used. Those tests are made based on real user paths and try to emulate a genuine user interaction

### Typing tests

Theses tests are here to make sure you properly use your objects everywhere in your code. Very useful to detect breaking changes in the API and to see if your functions react well to any possible input. Depending on how you look at them and on which functions they apply to, they can be seen as unit tests or integration tests.

### UI tests

Specific to front-end interface, UI tests helps you to detect any change happening in the UI. There are several types of them, some more suited to be treated as unit tests, some others being closer to E2E tests

### Coding style tests (aka linting tests)

This one is a little peculiar, as it does not directly prevent any bug or defect, but simply helps preserving a certain consistency in the way the code is written, making it easier to read and easier to jump in for new developers. However, adding certain linter rules can sometimes prevent bugs (by forbidding the use of syntaxes leading to ambiguous behavior for instance).

## What tests should I add on Shared Components ?

### A. Unit tests

What must be tested:

- Every modelizer ([example](../../packages/widgets/src/widgets/FundDetails/modelizer.test.js))
- Every selector
- Any pure function
- Unpure functions where external effects are mocked
- Every component (with a **shallow rendered** snapshot)

Reducers and sagas can be left untested only if you make sure no logic are left in them. The current architecture encourages you to only use sagas to redirect api calls results to modelizers and reducers to store modelizers output in the store.

Also, if one of your function has very low logic (and this "low" would need some clarification), you can leave it untested.

### B. Integration tests

What must be tested:

- Any **exported containers** should be tested with a deeply rendered snapshot (using mock-up data)
- Any exported function not tested by unit test (using mock-up when needed)
- Every function must provide flow typing

### C. End-to-end tests

What must be tested:

- Every exported container should be tested with Cypress to test user interaction

### D. Coding style

The linter rules of every package must be respected.

### E. Snapshots test

We decided to remove snapshot tests because of their inefficiency to catch bugs and for being time consuming to maintain.

**You should not write new snapshot tests.**

## How to Mock a Component ?

Like any other Jest test, you may want to mock a function or a component. To do so you need to:

- Create a folder `./src/__mocks__/` in your package.
- Create a file in that directory, the name is not imposed but it is important to give a comprehensive name to the file, the name of the package you want to mock for instance.
- In that file, export a function or variable with the same name as the component you want to mock.
- Jest will handle the rest and inject mocks into tests.

For example:

```jsx
// ./src/__mocks__/fact.js

export const KeyFacts = (props: any) => (
  <div>Mocked KeyFacts with props {prettyPrintProps(props)}</div>
);
```

#### _Notes_

A mock of `react-intl` can be found in `packages/ui/src/__mocks__/react-intl.js`.
