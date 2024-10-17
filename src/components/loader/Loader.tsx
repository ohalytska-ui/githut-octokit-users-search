import { CircularProgress, Box, CircularProgressProps } from '@mui/material';
import React, { FC } from 'react';

export const Loader: FC<CircularProgressProps> = (props) => {
  return (
    <Box marginTop="10px">
      <CircularProgress {...props} />
    </Box>
  );
};
