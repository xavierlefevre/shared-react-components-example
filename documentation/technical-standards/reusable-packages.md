# [Standard] Reusable packages

## Why would we want to care about reuse?

The objective of shared components is to share components with other developers, other projects. To this end a component, the fundsheet for instance, must be easily reusable by outside developers without the extra intervention of the SharedComponents core team.

If a developer has to look into the code to understand the general behavior of a shared component, beyond the time lost to grasp the behavior, he'll likely make mistakes when implementing the component in his code such as:

- not passing the expected props leading to unexpected side effect
- using css selectors not planned by the core contributors, hence extremely prone to future breaking changes

Thinking reuse also means thinking long term architecture. Documenting and setting reuse will clarify to consumers as much as contributors the set of expected rules for a given component. Beyond guiding, it will force discussion between core and outside contributors when facing new unexpected features or issues.

## How do I make my package reusable?

Reuse always comes down to documentation and presentation, the developers arriving on the project should have all the necessary information to easily use the components in their expected use cases.
What you will document for the developers is the component API (application programming interface), it recaps what parameters the component takes, how to use it, and what is the expected result. But it won't explain how it works internally! It's not the purpose.

### Reuse by developer consumers

#### Exported JavaScript components and functions

Each package has a meaning and responsibility usually represented by its architecture.
Input (props) and output (result) is the outside interface (API) of this architecture.
The exported JavaScript has to follow the chosen architecture (see the architecture standard to know how to code your package).

#### Exported Flow types

For robustness purposes, and to give auto API tools for developers we export the Flow types of our exported code for each of our packages (see the Flow documentation to know what we export and how to reproduce).

#### Use case examples

##### Storybook (only for React components)

Make sure your component has its own story in Storybook, it's the first step for testing reuse of Shared Components and seek validation from your PO.
You should connect all the component props to knobs, and feed the knobs to match all anticipated use cases.

If a property seems to have no effect on the components, check the reactivity of your prop. Be careful about class properties, they are not reactive, prefer [get properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) for computed reactive props.

Shared Components exposes a set of utils functions for stories. They are located in `./.storybook/utils.js` and you can use them by importing `shared-components-storybook-utils`.

```js
import {
  fundsheetParams,
  getStoriesParams,
  folderStructure as folders,
} from 'shared-components-storybook-utils';
```

##### Documentation

In addition to Storybook, the main readme of the package should contain four sections:

1. the purpose of the package
2. a gif showing his most simple use case
3. a how to install
4. an example of code implementation encompassing a simple but full usage

### Reuse update by developer contributors

Reuse concerns even more contributors as their changes impact all host projects (like MyClub).

#### Breaking changes

:warning: As soon as a developer changes:
- the exported components/functions names, props and parameters
- the exported flow types

He should consider it as a breaking change and anticipate the impact of this change by:
- specifying those changes as breaking while commiting
- updating the story and the reuse documentation

#### Architecture for contributions

The documentation should also include a contribution section explaining:

- the architecture
- any other specific info to know when developing on this package
