import React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button text="hello from Button" />
);

export const PrimaryButton = () => (
    <Button variation="primary" text="hello from PrimaryButton" />
);

export const SecondaryButton = () => (
    <Button variation="secondary" text="hello from SecondaryButton" />
);