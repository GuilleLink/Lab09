import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

//Basado en este Codepen:
//https://codepen.io/alvaromontoro/pen/BaaBYyz

export default { 
  title: 'Hands',
  decorators: [withKnobs]
};

export const YourHand = () =>(
  <Button onClick={(action(''))}></Button>
);

export const RivalHand = () =>(
    <Button onClick={(action(''))}></Button>
  );