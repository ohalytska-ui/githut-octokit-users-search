import { Container } from '@mui/material';
import { Props } from './types';

export const ContainerWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      {children}
    </Container>
  );
};
