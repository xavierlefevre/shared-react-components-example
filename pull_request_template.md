# Pull Request Template

- [ ] If modifications are made to the root of the repo, the PR is read by Shared Components team

## Detail

- [ ] PR Title = Ticket Title or Tickets Numbers
- [ ] Ticket link [here]()

| Internet Explorer - Screenshot | Chrome - Screenshot | UX Mock-up  |
| ------------------------------ | ------------------- | ----------- |
| INSERT_HERE                    | INSERT_HERE         | INSERT_HERE |

## Tests

> Make sure you did not forget one

### Unit tests

- [ ] For every React component, there is a shallow rendered snapshot of its naked component (not the container)
- [ ] For every pure function, there is a test (modelizers and selectors are pure functions)
- [ ] For every unpure function that carries some logic, there is a test

### Integration tests

- [ ] For every function, its input and output are typed with flow
- [ ] For every exported React component, there is a deeply rendered snapshots of its container after mocking all its api calls
- [ ] For every package-level exported function not already tested by unit tests, there is a test

### E2E tests

-  [ ] For every exported React component, there is a Cypress routine testing its behavior in real conditions (no mock-up).


## Shared Components Package Generator

Applicable if :

- New patterns or command lines in package.json
- New or updated webpack conf
- New standards for packages

- [ ] I have updated the package generator

## Refactoring

- [ ] Please be careful, I've done some **refactoring** in this PR
