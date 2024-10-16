import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} variant="outlined">
      Go back
    </Button>
  );
};
