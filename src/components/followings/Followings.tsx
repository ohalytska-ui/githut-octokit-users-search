// Unique ID
import { v4 as uuidv4 } from 'uuid';
import { Props } from './types';
import { Box, Paper, Typography } from '@mui/material';
import { ErrorAlert, Loader, UserFollowingsItem } from '..';

export const Followings: React.FC<Props> = ({ title, errorText, emptyData, isFetching, isError, userFollowings }) => {
  return (
    <Paper elevation={3} sx={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {isFetching && <Loader size={24} />}
      {isError && <ErrorAlert title="Error" errorText={errorText} />}
      {userFollowings && userFollowings.length > 0 ? (
        <Box sx={{ maxHeight: '40vh', overflow: 'auto' }}>
          {userFollowings.map((follower) => (
            <UserFollowingsItem key={uuidv4()} followings={follower} />
          ))}
        </Box>
      ) : (
        <Typography variant="body2">{emptyData}</Typography>
      )}
    </Paper>
  );
};
