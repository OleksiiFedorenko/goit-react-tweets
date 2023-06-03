import { fetchFirstUsers, fetchMoreUsers } from './tweetsOperations';
const thunks = [fetchFirstUsers, fetchMoreUsers];
export const thunksStatuses = status => thunks.map(thunk => thunk[status]);

export const handleFirstFetch = (state, { payload }) => {
  state.users = payload;
  state.page = 2;
};

export const handleFetchMore = (state, { payload }) => {
  state.users.push(...payload);
  state.page += 1;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleSuccess = state => {
  state.isLoading = false;
  state.error = false;
};

export const handleError = state => {
  state.isLoading = false;
  state.error = true;
};
