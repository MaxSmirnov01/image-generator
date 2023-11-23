/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { setFirstLoad } from './imgSlice';

export const defaultValues = {
  page: 1,
  requestedPage: 2,
  contentCount: 12,
};

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    page: defaultValues.page,
    requestedPage: defaultValues.requestedPage,
    favoritePage: defaultValues.page,
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setRequestedPage: (state, { payload }) => {
      state.requestedPage = payload;
    },
    setFavoritePage: (state, { payload }) => {
      state.favoritePage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setFirstLoad, (state) => {
      state.page = defaultValues.page;
      state.requestedPage = defaultValues.requestedPage;
    });
  },
});

export const { setPage, setRequestedPage, setFavoritePage } = pageSlice.actions;
export default pageSlice.reducer;
