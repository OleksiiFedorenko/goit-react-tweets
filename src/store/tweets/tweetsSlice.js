import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initTweets } from '../initial';
import {
  fetchFirstUsers,
  fetchMoreUsers,
  increaseFollowers,
  decreaseFollowers,
} from './tweetsOperations';
import {
  handleFirstFetch,
  handleFetchMore,
  fetchThunksStatuses,
  handleFetchPending,
  handleFetchSuccess,
  handleFetchError,
  handleFollow,
  handleUnfollow,
  updateThunksStatuses,
  handleUpdatePending,
  handleUpdateSuccess,
  handleUpdateError,
} from './tweetsHandlers';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initTweets,
  extraReducers: builder => {
    builder
      .addCase(fetchFirstUsers.fulfilled, handleFirstFetch)
      .addCase(fetchMoreUsers.fulfilled, handleFetchMore)
      .addCase(increaseFollowers.fulfilled, handleFollow)
      .addCase(decreaseFollowers.fulfilled, handleUnfollow)
      .addMatcher(
        isAnyOf(...fetchThunksStatuses('pending')),
        handleFetchPending
      )
      .addMatcher(
        isAnyOf(...fetchThunksStatuses('fulfilled')),
        handleFetchSuccess
      )
      .addMatcher(isAnyOf(...fetchThunksStatuses('rejected')), handleFetchError)
      .addMatcher(
        isAnyOf(...updateThunksStatuses('pending')),
        handleUpdatePending
      )
      .addMatcher(
        isAnyOf(...updateThunksStatuses('fulfilled')),
        handleUpdateSuccess
      )
      .addMatcher(
        isAnyOf(...updateThunksStatuses('rejected')),
        handleUpdateError
      );
  },
});

export const tweetsReducer = tweetsSlice.reducer;
