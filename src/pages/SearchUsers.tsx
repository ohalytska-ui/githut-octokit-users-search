// Unique ID because there is not always a user ID and login data is partially repeated
import { v4 as uuidv4 } from 'uuid';
import { useSearchUsersQuery } from '@/api/apiSlice';
import { useCallback, useEffect, useState } from 'react';
import { List, Box, TextField } from '@mui/material';
import { ContainerWrapper, ErrorAlert, Loader, UserItem } from '@/components';
import { debounce } from '@/utiles';
import { User } from '@/models';

const SearchUsers = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  const { data, isFetching, isError } = useSearchUsersQuery({ username: searchString, page }, { skip: !searchString });

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debounce(setSearchString)(e.currentTarget.value);
    setPage(1);
    setFilteredUsers([]);
  }, []);

  // Fetching users during scrolling
  useEffect(() => {
    if (data?.items) {
      setFilteredUsers((currentUsers) => [...currentUsers, ...data?.items]);
    }
  }, [data]);

  // Function for handling infinite scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if (bottom && !isFetching) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <ContainerWrapper>
      <Box>
        <TextField
          label="Search GitHub Users"
          variant="outlined"
          fullWidth
          onChange={handleSearch}
          autoComplete="off"
        />

        {isFetching && <Loader />}

        {isError && <ErrorAlert title="Error" errorText="Something went wrong — please try serch user again!" />}

        <Box onScroll={handleScroll} style={{ height: '90vh', overflow: 'auto' }} marginTop="10px">
          <List component="div">
            {filteredUsers.map((user) => (
              <UserItem user={user} key={uuidv4()} />
            ))}
          </List>
        </Box>
      </Box>
    </ContainerWrapper>
  );
};

export default SearchUsers;
