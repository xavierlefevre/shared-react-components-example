# ⚙ Shared Components

## 🔍 Discover how we organised our project of shared React components!

If your objective is to share any size of components between several web applications, **you are in the right place**.

> In this repository you will find a working example of a mono-repository of React components libraries.
>
> We hope to give you detailed tips to make you accelerate if you are working on a similar project.
>
> You can also copy paste this project entirely to reuse it as is.

## Key learnings!

### **1. 🧐 Use a mono-repository**

Split your responsibilities and domains in different packages, but have them all in one place for a smoother developer experience. We use [Lerna](https://github.com/lerna/lerna) for managing our mono-repo.

### **2. ⚛️ Follow "Atomic Design" principles**

An atom is a very small dumb and highly reusable component, while an organism is a full grown one-page business connected feature. It all comes from [Brad Frost Atomic Design principles](http://bradfrost.com/blog/post/atomic-web-design/). Find [here](documentation/technical-standards/architecture.md) our own implementation.

### **3. 🎪 Display it all in one Showroom: Storybook**

We use Storybook to develop and showcase our components! One central and unbiased place, forcing any contributor to always think reusability. To try it, [install the project](documentation/how-to-use/1-installation.md) and run `yarn start`.

### **4. 🔨 Beware breaking changes**

Use automatic versionning, changelogs and type systems to prevent messy bugs because of unanticipated breaking changes.

### **5. 💄 Define your customisation strategy**

We used Styled Components themes and an additionnal service of ours to define how our components can be customised. [Find here more details](documentation/development/how-to-style-a-component.md).

### **6. 🌬 Make your packages light**

With Tree Shaking, your users will just bundle what they need. You can find out how we did it by looking at the atoms package: its [package.json](packages/atoms/package.json), [babel.config.js](packages/atoms/babel.config.js) and [deployAssets.sh](packages/atoms/deployAssets.sh).

### **7. 👮‍ Control what components and features enter the repo**

Developing on "Shared components" is heavier than on a normal project, hence taking the decision to create a new component should be well thought. We recommend to plan at least 3 reuses of the component to make it worthwile. Here is [our decision tree](documentation/how-to-contribute/1-decision-making.md) to help us make that decision.

### **8. 🛣 Define a strict feature branch Git flow**

For us, all feature branches start from Master. PRs are first merged on Develop. Then on Master.
Regularly, we automatically merge Master in Develop to keep them aligned.

### **9. 🧹 Regularly update your dependencies**

More than any other project, "Shared components" has to be aligned with the latest standards, as new projects might launch and need to be compatible with it.

### **10. 👩‍💻👨‍💻 Dedicate a core team**

Just as an open source project, have a dedicated tech/business team focused on making "Shared components" a success

### **11. 🔗 Ease the Yarn Link pain**

If you want to locally test your component on your host project, you'll have to use "Yarn Link", we learned how [to deal with it](documentation/how-to-contribute/4.1-yarn-link.md).

## Project Documentation

> The full project documentation is [here](project-documentation.md)

If you want to launch Storybook locally, go through the [installation steps](documentation/how-to-contribute/2-getting-started.md)

## Our Stack

![stack flow](documentation/presentation/stack-flow.png)
![stack list](documentation/presentation/stack-list.png)

## Contributors

_To finish_

- Aurélien Le Masson
- Michel Parreno
- Hugo Lime
- Justine Mignot
- Surya Ambrose
- Ivan Poiraudeau
- Xavier Lefèvre
