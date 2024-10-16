import { Box, Avatar, Typography, Paper } from '@mui/material';
import { Props } from './types';

export const UserGeneral: React.FC<Props> = ({ user }) => {
  const { login, avatar_url, name } = user;

  return (
    <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
      <Box display="flex" alignItems="center" gap="20px">
        <Avatar src={avatar_url} alt={login} sx={{ width: 100, height: 100 }} />
        <Box>
          <Typography variant="h4">{name || '-'}</Typography>
          <Typography variant="body1" color="textSecondary">
            @{login}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
