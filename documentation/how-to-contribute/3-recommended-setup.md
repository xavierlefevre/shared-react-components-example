# Recommended setup

## Pretty Pull Request

Use [Pretty Pull Request](https://github.com/williamdclt/git-pretty-pull-request) to create new pull request and ensure the right format.

### Branch configuration

During the installation, when you configure the `pretty-pull-request.pull-bases` git option, set it up so you can open your PR on master and develop branches, _with master being first_ (see next section why). In the SharedComponents directory, run:

```bash
git config pretty-pull-request.pull-bases "master develop"
```

### Why does the PR on master needs to be opened first

We use Danger JS to look for potential breaking changes. When it finds some, Danger JS will post a comment only on the PR which is opened first. Since the PR on master, not develop, is the one meant to be reviewed by your co-developers, you need to open the PR on master first.
