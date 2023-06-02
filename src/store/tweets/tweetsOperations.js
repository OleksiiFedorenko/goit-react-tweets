import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64668975ba7110b663a3454c.mockapi.io/';

export const fetchFirstUsers = createAsyncThunk(
  'users/fetchFirst',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tweets?p=1&l=3');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreUsers = createAsyncThunk(
  'users/fetchMore',
  async (_, thunkAPI) => {
    const page = 2;
    try {
      const response = await axios.get(`/tweets?p=${page}&l=3`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
