import React from 'react';
import { Button } from './button';

export const ContainedDefaultButton = () => (
  <Button text="Default" variant={"contained"}/>
);

export const ContainedPrimaryButton = () => (
  <Button text="Primary" variant={"contained"} color={"primary"} />
);

export const ContainedSecondaryButton = () => (
  <Button text="Secondary" variant={"contained"} color={"secondary"} />
);

export const OutlinedDefaultButton = () => (
  <Button text="Default" variant={"outlined"}/>
);

export const OutlinedPrimaryButton = () => (
  <Button text="Primary" variant={"outlined"} color={"primary"} />
);

export const OutlinedSecondaryButton = () => (
  <Button text="Secondary" variant={"outlined"} color={"secondary"} />
);
