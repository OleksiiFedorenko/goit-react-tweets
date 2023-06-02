import { fetchFirstUsers, fetchMoreUsers } from './tweetsOperations';
const thunks = [fetchFirstUsers, fetchMoreUsers];
export const thunksStatuses = status => thunks.map(thunk => thunk[status]);

export const handleFirstFetch = (state, { payload }) => {
  console.log(payload);
  state.tweets = payload;
};

export const handleFetchMore = (state, { payload }) => {
  state.tweets.push(...payload);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleSuccess = state => {
  state.page += 1;
  state.isLoading = false;
  state.error = false;
};

export const handleError = state => {
  state.isLoading = false;
  state.error = true;
};
