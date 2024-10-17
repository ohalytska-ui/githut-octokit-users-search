import { ErrorAlert, Loader, UserGeneral, UserDetails, Followings, BackButton, ContainerWrapper } from '@/components';
import { useGetUserDetailsQuery, useGetUserFollowersQuery, useGetUserFollowingQuery } from '@/api/apiSlice';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import React from 'react';

const User = () => {
  const { username } = useParams<{ username: string }>();

  const { data: user, isFetching, isError } = useGetUserDetailsQuery(username ?? '');
  const {
    data: userFollowers,
    isFetching: isUserFollowersFetching,
    isError: isUserFollowersError,
  } = useGetUserFollowersQuery(user?.followers_url ?? '');
  const {
    data: userFollowing,
    isFetching: isUserFollowingFetching,
    isError: isUserFollowingError,
  } = useGetUserFollowingQuery(user?.following_url ?? '');

  if (isFetching) {
    return <Loader />;
  }

  if (isError || !user) {
    return <ErrorAlert title="Error" errorText="Something went wrong with loading user data!" />;
  }

  return (
    <ContainerWrapper>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <BackButton />
        <Typography variant="h4">User Details Page</Typography>
      </Box>

      <UserGeneral user={user} />

      <UserDetails user={user} />

      <Grid container spacing={4} marginTop="20px">
        <Grid size={6}>
          <Followings
            title="Followers:"
            emptyData="No followers found"
            errorText="Something went wrong with loading user followers!"
            isFetching={isUserFollowersFetching}
            isError={isUserFollowersError}
            userFollowings={userFollowers}
          />
        </Grid>

        <Grid size={6}>
          <Followings
            title="Following:"
            emptyData="No following found"
            errorText="Something went wrong with loading user following!"
            isFetching={isUserFollowingFetching}
            isError={isUserFollowingError}
            userFollowings={userFollowing}
          />
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
};

export default User;
