import { Typography, Paper } from '@mui/material';
import React, { FC } from 'react';
import { Props } from './types';

export const UserDetails: FC<Props> = ({ user }) => {
  const { company, email, blog } = user;

  return (
    <Paper elevation={3} sx={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1">
        <strong>Company:</strong> {company || 'N/A'}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {email || 'N/A'}
      </Typography>
      <Typography variant="body1">
        <strong>Blog:</strong> {blog ? <a href={blog}>{blog}</a> : 'N/A'}
      </Typography>
    </Paper>
  );
};
