import { findSharedComponentsImportLines, getPRsOverPeriod, isWeekMoreRecent } from './logic';
import * as fetch from './fetch';

describe('Gets the right import addition from a GitHub diff', () => {
  it('should find the new SharedComponents import', () => {
    const diffExample = `
diff --git a/packages/ui/src/components/DropdownWithTitle/DropdownWithTitle.stories.js b/packages/ui/src/components/DropdownWithTitle/DropdownWithTitle.stories.js
index f12de6d3d..9d3017aaa 100644
--- a/packages/ui/src/components/DropdownWithTitle/DropdownWithTitle.stories.js
+++ b/packages/ui/src/components/DropdownWithTitle/DropdownWithTitle.stories.js
@@ -2,7 +2,7 @@
  import React from 'react';

  import { storiesOf } from '@storybook/react';
-import { boolean, text, withKnobs } from '@storybook/addon-knobs';
+import { boolean, text, number, withKnobs } from '@storybook/addon-knobs';
+import { LanguageProvider } from '@shared-components/language-provider';
  import { toolsProjectTranslationsGuid } from 'shared-components-storybook-utils'; // eslint-disable-line

@@ -32,7 +32,7 @@ class DropdownWithTitleStory extends React.Component {

  storiesOf('Atoms', module)
    .addDecorator(withKnobs)
-  .add('DropdownWithTitle', () => {
+  .add('[DEPRECATED] DropdownWithTitle', () => {
      const options = [
        { value: 10, label: 'Item 1' },
        { value: 20, label: 'Item 2' },
@@ -48,7 +48,7 @@ storiesOf('Atoms', module)
          <DropdownWithTitleStory
            options={options}
            label={text('Label', 'label')}
-          width={text('width', '200')}
+          width={number('width', 200)}
            disabled={boolean('disabled', false)}
            isError={boolean('isError', false)}
          />`;
    const expectation =
      "+import { LanguageProvider } from '@shared-components/language-provider';";
    const result = findSharedComponentsImportLines(diffExample);
    expect(result).toContain(expectation);
  });
});

describe('Gets the PRs until the week asked', () => {
  it('retrieve PRs from GitHub until the specified week', async () => {
    fetch.fetchPullRequests = jest.fn((repo, base, page) => {
      if (page === 1)
        return Promise.resolve([
          { created_at: '2019-03-15T15:25:02Z' },
          { created_at: '2019-03-14T15:25:02Z' },
          { created_at: '2019-03-13T15:25:02Z' },
        ]);
      if (page === 2)
        return Promise.resolve([
          { created_at: '2019-03-11T15:25:02Z' },
          { created_at: '2019-03-08T15:25:02Z' },
          { created_at: '2019-03-06T15:25:02Z' },
        ]);
      return Promise.resolve([
        { created_at: '2019-03-04T15:25:02Z' },
        { created_at: '2019-03-03T15:25:02Z' },
        { created_at: '2018-11-02T15:25:02Z' },
      ]);
    });
    const result = await getPRsOverPeriod('github', 'develop', 2019, 11);
    expect(result.length).toEqual(6);
  });
});

describe('Checks that the asked week is below or above the current PR week', () => {
  it('is true if the current year and week are equal to the asked year and week', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2019, week: 11 },
      compared: { year: 2019, week: 11 },
    });
    expect(moreRecent).toEqual(true);
  });

  it('is true if the current year is more recent than the asked year', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2019, week: 11 },
      compared: { year: 2018, week: 50 },
    });
    expect(moreRecent).toEqual(true);
  });

  it('is false if the current year is older than the asked year', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2018, week: 52 },
      compared: { year: 2019, week: 11 },
    });
    expect(moreRecent).toEqual(false);
  });

  it('is false if the current week is older than the asked week', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2019, week: 7 },
      compared: { year: 2019, week: 11 },
    });
    expect(moreRecent).toEqual(false);
  });

  it('is true if the current week is more recent than the asked week', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2019, week: 12 },
      compared: { year: 2019, week: 11 },
    });
    expect(moreRecent).toEqual(true);
  });

  it('is true if the current week is the same as the asked week', () => {
    const moreRecent = isWeekMoreRecent({
      current: { year: 2019, week: 11 },
      compared: { year: 2019, week: 11 },
    });
    expect(moreRecent).toEqual(true);
  });
});
