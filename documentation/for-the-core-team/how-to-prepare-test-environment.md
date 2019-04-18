# How to create a copy of Shared Components for testing purposes

## Why?

Sometimes we need to perform tests that, if gone wrong, may cause the Shared Components to stop working.

Example : when updating lerna to new major version, we wanted to test if publication of packages still worked. While doing this, we pushed some "bad" packages and thus broke the publication, blocking all the teams that were working on Shared Components.

To avoid such situations, all dangerous tests should be performed in an isolated environment.

## How-to

### Prepare the new project

1. Create `shared-components-test` folder.
1. Copy the contents of `shared-components` to the newly created folder.

Work inside `shared-components-test`:

1. Create a new package called `package-test`. Use the generator to do it.
1. In `packages` delete all folders except the newly created package.
1. In `packages/package-test/package.json` delete all mentions `@shared-components/` packages
1. Remove all mentions of `@shared-components` packages : `rm yarn.lock && yarn`
1. `rm .git && git init && git add . && git commit -nm "Initial commit"`

### Push the new project to a new github repository

1. On github create `shared-components-test` repo in the `shared-components` organisation.
1. Push the contents of `shared-components-test` folder to this repository

### Configure CircleCI for the new repository

Prerequisite : you should be an admin of the `shared-components` organisation.

On CircleCI: 

1. Select the `shared-components` organisation, then `Projects`.
1. Select the `shared-components-test` project and `Follow` it.
1. In the `Checkout SSH keys` section add your key.

On github:

1. Configure the CircleCI webhook : in the repository's settings create a new hook that is a copy of that of `shared-components` repository.
1. Fill in the `secret` field with a token generated in your user settings. Give this token all the rights.

Your isolated project is ready! You can test publication of packages without impacting the tags of the production repository.
Next step is to create an isolated verdaccio repository. This will be covered later.



# Please update this doc if have suggestions.
