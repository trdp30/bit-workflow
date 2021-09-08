import React from 'react';
import Btn from '@material-ui/core/Button';

export function Button({ text, variant="contained", color }) {
  return (
    <Btn variant={variant} color={color}>
      {text}
    </Btn>
  );
}
