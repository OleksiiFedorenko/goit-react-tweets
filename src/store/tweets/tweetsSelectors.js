import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'store/filter/filterSelector';

export const selectUsers = state => state.tweets.users;
export const selectFollowings = state => state.tweets.followings;
export const selectPage = state => state.tweets.page;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectIsUpdating = state => state.tweets.isUpdating;
export const selectError = state => state.tweets.error;

export const selectFilteredTweets = createSelector(
  [selectUsers, selectFollowings, selectFilter],
  (users, followings, filter) => {
    if (filter === 'followings')
      return users.filter(({ id }) => followings.includes(id));

    if (filter === 'follow')
      return users.filter(({ id }) => !followings.includes(id));

    return users;
  }
);
