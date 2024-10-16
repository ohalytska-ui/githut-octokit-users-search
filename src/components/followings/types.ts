import { User } from '../../models';

export interface Props {
  title: string;
  emptyData: string;
  isFetching: boolean;
  isError: boolean;
  errorText: string;
  userFollowings?: User[];
}
