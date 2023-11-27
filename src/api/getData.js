import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from './apiUrls';

const apiKey = 'UiRkY8kvxsMcQjlkjSEBu6_nJbUjZZI0svIAa1-GrjM';

const getData = createAsyncThunk('getData', async ({ text, requestedPage }, { rejectWithValue }) => {
  try {
    const response = await axios.get(api.getData(text, requestedPage), {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    const { data, status } = error.response;

    return rejectWithValue({ data, status });
  }
});

export default getData;
