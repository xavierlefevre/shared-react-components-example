# How to export flow types from your SharedComponents component

In each package, there is a folder called `flow-typed/PackageTypes` that groups all types from a package and exports them. This folder has the following structure:

```ts
flow-typed
├── npm
|   ├── babel-cli_vx.x.x.js
|   ├── babel-core_vx.x.x.js
|   └── ...
|
└── PackageTypes
    ├── ui_vx.x.x.js // defines all the exports of module UI
    |
    ├── UtilsType // contains all types that are not props types
    |   ├── WithIntlType.js
    |   └── ...
    |
    └── PropsTypes // all props types of components as ComponentName.js
        ├── Button.js
        ├── Checkbox.js
        └── ...
```

Let's say you create a new CustomSelectInput in UI. Create a `CustomSelectInput.js` file in the `PackageTypes/PropsTypes` folder. Inside, declare your type as you would do in a classic component:

```ts
declare type CustomSelectInputPropsType = {
  className: string;
  items: SelectItemType[];
  onChange: () => void;
};
```

In the `ui_vx.x.x.js` file, you can now add a new entry in the `module.exports`:

```ts
declare module '@shared-components/atoms' {
  [...]
  declare export var CustomSelectInput: Class<React$Component<CustomSelectInputPropsType>>;
}
```

Make sure there is nothing else AFTER the module declaration as it helps us to
detect which flow declaration are missing (adding declarations before is fine).

And voilà!

## The problem of defaultProps:

If your `CustomSelectInput` component has **defaultProps**:

- Add a `?` before the `:` of the **non-required** prop in the `CustomSelectInputPropsType` type.

  - e.g:

  ```ts
  declare type CustomSelectInputPropsType = {|
    className?: string;
    items: SelectItemType[];
    onChange: () => void;
  |};
  ```

- Make sure `CustomSelectInputPropsType` is a **strict** type (with {| and |})
- In your component, add your `defaultProps` as usual.
- Type your defaultProps with a **strict** type
  - e.g:
  ```ts
  type CustomSelectInputDefaultPropsType = {| className: string |}
  ```

* When declaring your component, replace

  ```ts
  (props : CustomSelectInputPropsType) = {...}
  ```

  by:

  ```ts
  (props: {...CustomSelectInputPropsType, ...CustomSelectInputDefaultPropsType}) = {...}
  ```
