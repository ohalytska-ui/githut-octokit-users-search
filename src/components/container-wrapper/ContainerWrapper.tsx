import { Container } from '@mui/material';
import React, { FC } from 'react';
import { Props } from './types';

export const ContainerWrapper: FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      {children}
    </Container>
  );
};
