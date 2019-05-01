# Getting started

## Prerequisite

- Node == 10.4.1
- NVM (Node Version Manager)
- Yarn >= 1.7
- A C++ compiler:
  - on Ubuntu, you can install `build-essential` where one is included
  - on macOS, one should already be installed on your computer

(if after `npm install yarn`, `yarn -v` keeps saying you have < 1.7, you may have Yarn installed globally without npm. Take a look here https://stackoverflow.com/a/45914006)

## Install the project

- Clone the project:

  ```bash
  git clone git@github.com:shared-components/project-example.git shared-components
  ```

- Make sure you use the correct version of Node,

  ```bash
  cd shared-components
  nvm use
  ```

- Download Shared Components dependencies:
  ```bash
  yarn
  ```

## Launch storybook

```bash
yarn storybook
```

You can then see Storybook at http://localhost:9001/
