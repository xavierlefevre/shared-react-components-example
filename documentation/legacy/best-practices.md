# Best Practices / Troubleshoot / FAQ

The purpose of this doc is to collect and regroup all the best practices, frequent questions or frequent bugs encountered. Ctrl+F is your friend here!

### No rebase on develop

- PROBLEM: rebase on develop ⇒ you get unvalidated / WIP **develop** commits on you feature branch ⇒ merge on **master** your feature branch ⇒ non-validated / WIP code on **master** :cry:
- BEST PRACTICE: merge your feature branch in **develop** locally, fix conflicts manually in the merge commit, then push **develop**

### No rebase on master if already merged on develop

- PROBLEM: when rebasing, hashes of the commits change. If after the merge on develop, your ticket is back from validation, and you keep working on your feature branch, all the commits already merged on **develop** will not be recognised (hashes ≠): conflicts on your own code
- BEST PRACTICE: if you need to update your feature branch, merge **master** into your feature branch instead of rebasing

### When I want to merge my PR on GitHub, I have conflicts

- PROBLEM: Resolve conflicts alone is dangerous: you may break / remove features from others
- BEST PRACTICE:
  - test a manual merge (Github can sometimes panic)
  - if you still have conflits, go see the person you have conflicts with

### Which packages do I need to bump?

- PROBLEM: Bumping all versions blindly can add unverified/untested code in your project. Version bumps can work in Storybook but need changes in your project.
- BEST PRACTICE: Only bump packages that are in the scope of your ticket, and TEST IT

---

### Other Best Practices

Those BP already helped us solve an issue;

- Weird issue? Run `yarn reset`
- **Never** delete the `yarn.lock`
- When changing the webpack config or build config, test locally if this doesn't break host projects.
