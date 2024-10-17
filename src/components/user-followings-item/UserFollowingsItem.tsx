import { Box, Avatar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Props } from './types';

export const UserFollowingsItem: FC<Props> = ({ followings }) => {
  const { id, login, avatar_url } = followings;

  return (
    <Box key={id} display="flex" alignItems="center" marginBottom="10px">
      <Avatar src={avatar_url} alt={login} sx={{ width: 40, height: 40 }} />
      <Typography variant="body2" marginLeft="10px">
        {login}
      </Typography>
    </Box>
  );
};
