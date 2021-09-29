import * as React from 'react';

import { Button } from '.';
import { setup } from '@hoc/setup';

import '/src/assets/css/libs.css';
import '/src/assets/css/fonts.css';
import '/src/assets/css/variables.css';
import '/src/assets/css/base.css';
import '/src/assets/css/common.css';

export default { title: 'Shared/Button' };

export const Base: React.VFC = () => {
  const Component = setup(Button);
  return <Component>Base</Component>;
};

export const Second: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_secondary">Second</Component>;
};

export const Light: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_light">Light</Component>;
};
export const Red: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_red">Red</Component>;
};
export const Green: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_green">Green</Component>;
};

export const Blue: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_blue">Blue</Component>;
};
export const darkGreen: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_darkGreen">darkGreen</Component>;
};
export const GreenGradient: React.VFC = () => {
  const Component = setup(Button);
  return <Component mode="_greenGradient">GreenGradient</Component>;
};

export const Small: React.VFC = () => {
  const Component = setup(Button);
  return <Component size="small">Small</Component>;
};

export const Average: React.VFC = () => {
  const Component = setup(Button);
  return <Component size="average">Average</Component>;
};
export const Big: React.VFC = () => {
  const Component = setup(Button);
  return <Component size="big">big</Component>;
};

export const Loading: React.VFC = () => {
  const Component = setup(Button);
  return <Component isLoading={true}>big</Component>;
};

export const Full: React.VFC = () => {
  const Component = setup(Button);
  return <Component isFull={Full}>big</Component>;
};

export const Disabled: React.VFC = () => {
  const Component = setup(Button);
  return <Component disabled>Disabled</Component>;
};
