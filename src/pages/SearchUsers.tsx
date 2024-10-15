import { useSearchUsersQuery } from '../api/apiSlice';

import { useCallback, useEffect, useState } from 'react';
import { debounce } from '../utiles/debounce';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
  TextField,
  Alert,
  AlertTitle,
} from '@mui/material';
import { User } from '../models';

export const SearchUsers = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const { data, isFetching, isError } = useSearchUsersQuery({ username: searchString, page }, { skip: !searchString });

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(setSearchString)(e.currentTarget.value);
    setPage(1);
    setFilteredUsers([]);
  }, []);

  useEffect(() => {
    if (data?.items) {
      setFilteredUsers((currentUsers) => [...currentUsers, ...data?.items]);
    }
  }, [data]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if (bottom && !isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: '20px',
      }}
    >
      <Box>
        <TextField label="Search GitHub Users" variant="outlined" fullWidth onChange={handleSearch} />
        {isFetching && (
          <Box marginTop="10px">
            <CircularProgress />
          </Box>
        )}

        {isError && (
          <Box marginTop="10px">
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Oops! Something went wrong — <strong>please try serch user again!</strong>
            </Alert>
          </Box>
        )}

        <Box onScroll={handleScroll} style={{ height: '90vh', overflow: 'auto' }} marginTop="10px">
          <List component="div">
            {filteredUsers.map((user) => (
              <ListItem
                key={uuidv4()}
                component="a"
                href={`/user/${user.login}`}
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
                    backgroundColor: 'f0f0f0',
                  },
                }}
              >
                <Avatar src={user.avatar_url} alt={user.login} />
                <ListItemText primary={user.login} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};
