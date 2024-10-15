import { User } from './User';

export interface UserSearchResponse {
  incomplete_results: boolean;
  items: User[];
  total_count: number;
}
