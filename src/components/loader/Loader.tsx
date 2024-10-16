import { CircularProgress, Box, CircularProgressProps } from '@mui/material';

export const Loader: React.FC<CircularProgressProps> = (props) => {
  return (
    <Box marginTop="10px">
      <CircularProgress {...props} />
    </Box>
  );
};
