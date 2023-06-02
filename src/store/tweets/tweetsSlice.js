import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initTweets } from '../initial';
import { fetchFirstUsers, fetchMoreUsers } from './tweetsOperations';
import {
  handleFirstFetch,
  handleFetchMore,
  handlePending,
  handleSuccess,
  handleError,
  thunksStatuses,
} from './tweetsHandlers';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initTweets,
  extraReducers: builder => {
    builder
      .addCase(fetchFirstUsers.fulfilled, handleFirstFetch)
      .addCase(fetchMoreUsers.fulfilled, handleFetchMore)
      .addMatcher(isAnyOf(...thunksStatuses('pending')), handlePending)
      .addMatcher(isAnyOf(...thunksStatuses('fulfilled')), handleSuccess)
      .addMatcher(isAnyOf(...thunksStatuses('rejected')), handleError);
  },
});

export const tweetsReducer = tweetsSlice.reducer;
