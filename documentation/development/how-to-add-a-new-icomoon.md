# Add a new icon to the icomoon font

- To add an icon to the Shared Components icon set, go to [icomoon](https://icomoon.io/app). Import the previous Shared Components icon set by clicking on `Import Icons` in the top-left hand corner and choosing the `selection.json` file of the Icon component vendors: `packages/ui/src/components/Icon/vendor/selection.json`. Click on `YES` on the popup that'll open.
- Import the SVG file of the icon you want to add to the set by clicking on the menu button on the top-right of the icon set and selecting `import to set`.
- Place the new icon at the end of the set by using the `move` mouse option.
- Select all the icons of the new Shared Components icon set (selected icons are highlighted in yellow). You can select/deselect icons by clicking on them (using the `select` mouse option), or by clicking on the icon set menu button and choosing `Select All`.
- Click on `Generate Font` at the bottom of the page, check that your new icons are there, and click on `Download` (bottom of the page)
- Replace the content of the [`Icon/vendors`](https://github.com/shared-components/shared-components/tree/master/packages/ui/src/components/Icon/vendors) folder of Shared Components by the content of the `icons` folder in the ZIP file. :warning: Depending on how you exported from Icomoon, you may have to rename the `.css` file from `style.css` to `icons.css`. Check the content of the SharedComponents folder to see the correct name!
- Replace the previous `selection.json`, `style.css` files and the `fonts` folder of the [`Icon component vendors`](https://github.com/shared-components/shared-components/tree/master/packages/ui/src/components/Icon/vendors) folder by the content of the `icons` folder in the ZIP file.
- Add the `slug` of your new icons to the full icons list in the `Icon` component story in the UI package (`packages/ui/src/components/Icon/Icon.stories.js`).

You can now use your new icon! If you forgot the `slug` of you new icon, you can find it as the `glyph-name` property of your icon in the `icomoon.svg` file.
