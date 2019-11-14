import React from 'react';
import { Button } from '@storybook/react/demo';

//Basado en este Codepen:
//https://codepen.io/alvaromontoro/pen/BaaBYyz

export default { title: 'Button' };

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);

export const rockButton = () => <Button>Rock</Button>;

export const paperButton = () => <Button>Paper</Button>;

export const scisorsButton = () => <Button>Scisors</Button>;

export const refreshButton = () => <Button>Refresh Round</Button>;