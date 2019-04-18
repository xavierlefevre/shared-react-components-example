# How to create a perfect component on SharedComponents ?

What is a perfect SharedComponents component ?

- its code is at the right place and is well organised
- it is tested
- it can be imported by a consumer with a minimal impact on its application size
- it is customizable

## Prerequisite

Before adding a new component in SharedComponents, make sure [it is a valuable thing to do](./how-to-contribute/1-decision-making.md)

## 1. Organize your component well

Check where your component should reside: [SharedComponents Architecture standard](./technical-standards/architecture.md#what-is-a-good-architecture-on-shared-components).  
Is it a new product, a new widget or a new UI component ?

## 2. Use generators to quickly bootstrap a standardized component

Depending on what you are building:

### A product

Ask the SharedComponents team to help you define an architecture based on your needs. Then, you may use the [package generator](<(./create-package.md)>) to build your product.

### A widget

A generator is on its way. For the time being, you'll have to copy-paste the Widget Template files found in `packages/widgets/src/development/WidgetTemplate`

### A UI

The UI generator will automatically build a new UI based on template files (`packages/ui/src/components/UITemplate`). To use it:

1. `cd` to the root of the SharedComponents project
2. `yarn generate:ui`
3. After the component has been generated, you must insert the following flow-typed export in `packages/ui/flow-typed/PackageTypes/ui_vx.x.x.js`, inside `declare module '@shared-components/atoms'`:

```js
declare export var YourNewUIName: Class<
  React$Component<YourNewUINamePropsType>
>;
```

## 3. Test your component brutally

Your component should be heavilly tested to avoid regression and hidden bugs. You can find [here](./technical-standards/tests.md##what-tests-should-i-add-on-shared-components) the list of tests expected on a SharedComponents component, where to put them and some examples.

## 4. Make it light

When someone will import your component, he or she might only need this one. Therefore, you must export your component in a way that the user can always choose to import the minimum amount of code. You can follow [this standard (TODO)]() to find out how to do this (TODO: write this standard with NicoG or AntoineK).

## 5. Help others to reuse your component

Your component should of course be pretty "as is", but someone might want to customize it before using it. To do this, you need to [make your component customizable](./how-to-style-a-component.md).

Then, for every component, function, and data you export, its flow type should also be exported with all the flow types exported from the package. This helps other developers know your API and avoid mistakes.

You should also make sure to display your component in Storybook so that developers and POs can see your component and play with it. Find out how to do all that [here](./technical-standards/reusable-packages.md#how-do-i-make-my-package-reusable).
