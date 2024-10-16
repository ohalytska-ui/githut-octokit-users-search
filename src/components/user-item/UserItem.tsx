import { ListItem, ListItemText, Avatar } from '@mui/material';
import { Props } from './types';

export const UserItem: React.FC<Props> = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <ListItem
      component="a"
      href={`/user/${login}`}
      sx={{
        display: 'flex',
        gap: '10px',
        borderBottom: '1px solid lightgrey',
        borderLeft: '1px solid lightgrey',
        borderRight: '1px solid lightgrey',
        padding: '10px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        backgroundColor: '#fff',
        ':hover': {
          backgroundColor: '#f0f0f0',
        },
        ':visited': {
          color: '#888', // Color when the link is visited
        },
      }}
    >
      <Avatar src={avatar_url} alt={login} />
      <ListItemText
        primary={login}
        primaryTypographyProps={{
          sx: {
            color: '#1976d2',
            ':visited': {
              color: '#888',
            },
            ':hover': {
              color: '#000',
            },
            transition: 'color 0.3s ease',
          },
        }}
      />
    </ListItem>
  );
};
