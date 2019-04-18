# [Standard] Up to date dependencies

## What does it mean?

By up to date dependencies, we mean that your project external libraries have recent versions.
For instance for Moment, a JS date handling library:

- Four months ago, Moment v2.1.0 was published
- Last month, Moment v2.4.0 was published
- Today, in your project, the version of Moment is still at v2.1.0

It means that you are late, and that the standard is KO. But then you ask yourself...

## Why should the SharedComponents team regularly update its project dependencies?

The software ecosystem is in constant evolution. Libraries are created and updated on a daily basis by the open-source community. And we rely on those open-source librairies.
By having up to date dependencies, we:

- make sure that we always have the latest security, bug and performance improvements
- can enjoy new features to improve the project UX/UI
- are certain that new developers will have no trouble installing your project, because latest versions are developed and compatible with the latest systems
- ensure that most developers will have no trouble understanding and contributing to your code as they will have most surely already used those libraries
- will adapt your reusable components to your libraries breaking changes
  - for instance if React gets updated with a major breaking change, we better adapt our code fast as people will most surely want to use our components on React latest version

## How do we update SharedComponents dependencies? >3hours/month

### 1. Ticket creation when analysing indicators

Once a week, the SharedComponents team has a ticket to update the team indicators and analyze them to see if actions need to be taken. The dependencies indicator is here: https://docs.google.com/spreadsheets/d/19TaAcBr69339iQI8DqWD88tEtWitLvhAwiAwdo9Cy3E/edit?usp=sharing

The "Graph: Number of dependencies to update" shows the number of dependencies to be updated (or the ones that will soon need to be). By using the "Data: Raw dependencies from CircleCI" tab, we can know exactly what packages need to be updated and create a ticket for each one of them.

:pencil: TODO: the indicator does not currently check the versions of node, npm and yarn.

One ticket can contain several minor/patch updates, but there should be only one major update per ticket.

### 2. Priorization

During the backlog refinement, prioritize your major dependencies update by importance:
- React or Webpack are more critical than Eslint for instance

### 3. Time estimation (During the technical refinement)

- Go to the github repo and scroll over the list of Issues ("bug v<latest major>" is usually an efficient filter) to determine how stable the version you want to install is. You might find out it is preferable to delay the update.
- The open the Changelog of the library you decided to update. You can also google the name of the library plus "migration to" the version you are updating to. Most important open source libraries provide blog articles or specific documentations to guide the migration. Pay attention to dependencies between updates (for instance, updating storybook to v4 forced us to first upgrade webpack to v4).
- Define which packages in SharedComponents can be updated independently (fundsheet and share-comparator can most of the time be updated in different tickets for instance)
  :warning: Peer dependencies must always be updated at once in all packages :warning:
- Use these information to roughly estimate the quantity of changes that will be required to update all of SharedComponents packages and create enough tickets to do it all.
- Size the timeboxes.
- If you are updating environment tools (yarn, npm, lerna, ...) do not forget to add enough time to check every scripts and the CI configuration.

### 4. Start to upgrade

#### Minor and Patches
Those updates should not come with any breaking change
 - Update the package.json of each package
 - Run `yarn`
 - Launch all tests `yarn test:force`
 - Test your app on Storybook
 - If everything seems OK, then you are good to open a PR

#### Major updates
- Check the changelog / migration guide to understand what needs to be changed and follow it
- Test your app
- Lauch your automatic tests
- Commit each step, and verify that the CI is green
- If you reached the end of your timebox but did not finish the update, create a ticket and prioritize with your PO
- :warning: If you a upgrade a peer dependency to its next major version, **you must indicate a breaking change in the SharedComponents package as well.** :warning:

Indeed, you expect the host package to also upgrade that peer dependency to its next version, meaning the host project will likely have to change its code to accommodate to the new version of the peer dependency.

### Learnings

Find below a list of libraries by update risk level:

- Low risk libraries:
  - prettier
  - eslint
- High risk libraries, dependance to others:
  - babel
  - react + flow
  - redux

## Current indicator status

https://docs.google.com/spreadsheets/d/19TaAcBr69339iQI8DqWD88tEtWitLvhAwiAwdo9Cy3E/edit?usp=sharing
