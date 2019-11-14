import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

//Basado en este Codepen:
//https://codepen.io/alvaromontoro/pen/BaaBYyz

export default { 
  title: 'Buttons',
  decorators: [withKnobs]
};

export const rockButton = () => (
  <Button onClick={(action('👊'))}>Rock</Button>
);
export const paperButton = () => (
  <Button onClick={(action('✋'))}>Paper</Button>
);

export const scisorsButton = () =>(
  <Button onClick={(action('✌'))}>Scisors</Button>
);

export const refreshButton = () =>(
  <Button onClick={(action('Refresh'))}>Refresh Round</Button>
);