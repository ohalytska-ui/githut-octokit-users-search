import { Box, Alert, AlertTitle } from '@mui/material';
import { Props } from './types';

export const ErrorAlert: React.FC<Props> = ({ title, errorText }) => {
  return (
    <Box marginTop="10px">
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {errorText}
      </Alert>
    </Box>
  );
};
