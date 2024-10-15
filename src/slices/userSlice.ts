import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models';

const emptyUser: User | null = null;

const userSlice = createSlice({
  name: 'user',
  initialState: emptyUser,
  reducers: {},
});

// Export the generated reducer function
export default userSlice.reducer;
