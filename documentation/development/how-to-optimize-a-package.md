# Optimize your package before publishing

:warning: Please double check that there is no development librairies in the package.json "dependencies" section. Exemple : jest, eslint, webpack, babel, ...

Next, ignore common libraries you don't want to see bundled with your library, but still warn developers that they are required in the parent project, like React for instance:

- In the "webpack.config.js", add a [externals](https://webpack.js.org/configuration/externals/) property
- In the package.json, add a peer dependency corresponding to the installed library you excluded from your final build
- You can find examples in the package "language-provider" for instance
