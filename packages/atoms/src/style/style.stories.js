import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import { SharedComponentsColors, assetClassColors, typography } from './index';

const styles = {
  showcaseContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  typographyShowcase: {
    margin: '10px',
    padding: '5px',
  },
  colorShowcase: {
    height: '150px',
    width: '150px',
    margin: '10px',
    padding: '5px',
  },
  colorBlock: {
    border: '1px grey solid',
    height: '100px',
    width: '100px',
    marginBottom: '10px',
  },
  h1: {
    textAlign: 'center',
  },
};

const displayColors = colorDict => (
  <div style={styles.showcaseContainer}>
    {Object.keys(colorDict).map(color => (
      <div style={styles.colorShowcase}>
        <div
          style={{ ...styles.colorBlock, backgroundColor: colorDict[color] }}
        />
        <div>{color}</div>
        <div>{colorDict[color]}</div>
      </div>
    ))}
  </div>
);

const displayTypographies = typoDict => (
  <div style={styles.showcaseContainer}>
    {Object.keys(typoDict).map(typo => {
      const TextStyle = styled.span`
        ${typoDict[typo]}
      `;
      return (
        <div style={styles.typographyShowcase}>
          <TextStyle>{typo}</TextStyle>
        </div>
      );
    })}
  </div>
);

const StyleStory = () => (
  <div style={styles.showcaseContainer}>
    <div>
      <h1 style={styles.h1}>SharedComponentsColors</h1>
      {displayColors(SharedComponentsColors)}
    </div>
    <div>
      <h1 style={styles.h1}>assetClassColors</h1>
      {displayColors(assetClassColors)}
    </div>
    <div>
      <h1 style={styles.h1}>typography</h1>
      {displayTypographies(typography)}
    </div>
  </div>
);

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('Style Guide', () => <StyleStory />);
