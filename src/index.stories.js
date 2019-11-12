import React from 'react';
import { Button } from '@storybook/react/demo';

//Basado en este Codepen:
//https://codepen.io/alvaromontoro/pen/BaaBYyz

export default { title: 'Button' };




export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);

export const withTexEmoji = () => <Button> Hello World </Button>;


