# Configure the CI

In order to configure your CI to be able to access the private registry, you need to:

- Get an authToken from `~/.npmrc`. You can find it on the line `//{your verdaccio url}/verdaccio/:_authToken="TOKEN"`

- Add the token in CircleCI as an environment variable `REGISTRY_TOKEN`

- Add these step to your circle CI commands after the `checkout` step :

```
- run:
    name: Add Verdaccio registry
    command: echo -e '//{your verdaccio url}/verdaccio/:_authToken="${REGISTRY_TOKEN}"' >> ~/.npmrc
- run:
    name: Map verdaccio with @shared-components
    command: echo '@shared-components:registry={your verdaccio url}' >> ~/.npmrc
```
