import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Box, Avatar, Typography, Alert, AlertTitle, Container, Paper, Button } from '@mui/material';
import { useGetUserDetailsQuery, useGetUserFollowersQuery, useGetUserFollowingQuery } from '../api/apiSlice';
import Grid from '@mui/material/Grid2';

const UserDetails = () => {
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

  const navigate = useNavigate();

  if (isFetching) return <CircularProgress />;

  if (isError || !user)
    return (
      <Box paddingTop="10px">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Oops! Error <strong>loading user data!</strong>
        </Alert>
      </Box>
    );

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button onClick={() => navigate(-1)} variant="outlined">
          Go back
        </Button>
        <Typography variant="h4">User Details Page</Typography>
      </Box>

      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
        <Box display="flex" alignItems="center" gap="20px">
          <Avatar src={user.avatar_url} alt={user.login} sx={{ width: 100, height: 100 }} />
          <Box>
            <Typography variant="h4">Name: {user.name || '-'}</Typography>
            <Typography variant="body1" color="textSecondary">
              @{user.login}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>
        <Typography variant="body1">
          <strong>Company:</strong> {user.company || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email || 'N/A'}
        </Typography>
        <Typography variant="body1">
          <strong>Blog:</strong> {user.blog ? <a href={user.blog}>{user.blog}</a> : 'N/A'}
        </Typography>
      </Paper>

      <Grid container spacing={4} marginTop="20px">
        <Grid size={6}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Followers:
            </Typography>
            {isUserFollowersFetching && <CircularProgress size={24} />}
            {isUserFollowersError && (
              <Box marginTop="10px">
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Oops! Error <strong>loading user followers data!</strong>
                </Alert>
              </Box>
            )}
            {userFollowers && userFollowers.length > 0 ? (
              <Box sx={{ maxHeight: '40vh', overflow: 'auto' }}>
                {userFollowers.map((follower) => (
                  <Box key={follower.id} display="flex" alignItems="center" marginBottom="10px">
                    <Avatar src={follower.avatar_url} alt={follower.login} sx={{ width: 40, height: 40 }} />
                    <Typography variant="body2" marginLeft="10px">
                      {follower.login}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="body2">No followers found.</Typography>
            )}
          </Paper>
        </Grid>

        <Grid size={6}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Followers:
            </Typography>
            {isUserFollowingFetching && <CircularProgress size={24} />}
            {isUserFollowingError && (
              <Box marginTop="10px">
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Oops! Error <strong>loading user followers data!</strong>
                </Alert>
              </Box>
            )}
            {userFollowing && userFollowing.length > 0 ? (
              <Box sx={{ maxHeight: '60vh', overflow: 'auto' }}>
                {userFollowing.map((following) => (
                  <Box key={following.id} display="flex" alignItems="center" marginBottom="10px">
                    <Avatar src={following.avatar_url} alt={following.login} sx={{ width: 40, height: 40 }} />
                    <Typography variant="body2" marginLeft="10px">
                      {following.login}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography variant="body2">No followers found.</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
