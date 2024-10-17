import { Box, Alert, AlertTitle } from '@mui/material';
import React, { FC } from 'react';
import { Props } from './types';

export const ErrorAlert: FC<Props> = ({ title, errorText }) => {
  return (
    <Box marginTop="10px">
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {errorText}
      </Alert>
    </Box>
  );
};
