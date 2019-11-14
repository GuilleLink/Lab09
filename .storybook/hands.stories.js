import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import style from 'react-syntax-highlighter/dist/styles/hljs/atelier-savanna-dark';

//Basado en este Codepen:
//https://codepen.io/alvaromontoro/pen/BaaBYyz

export default { 
  title: 'Hands',
  decorators: [withKnobs]
};

export const YourHand = () => {
  const name = text("Play", "Rock");
  const content = `You picked ${name}.`;

  return <div color="white">{content}</div>;
};

export const RivalHand = () => {
  const name = text("Play", "Paper");
  const content = `Computer picked ${name}.`;

  return <div color="white">{content}</div>;
};
