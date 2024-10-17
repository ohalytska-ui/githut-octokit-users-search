import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import React from 'react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} variant="outlined">
      Go back
    </Button>
  );
};
