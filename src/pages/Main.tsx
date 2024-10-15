import { useGetUsersQuery } from '../api/apiSlice';

export const Main = () => {
  const { data: users = [], isLoading, isSuccess, isError, error } = useGetUsersQuery();

  console.log('users', isLoading, users, isSuccess, error, isError);
  return <></>;
};
