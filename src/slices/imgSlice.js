/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import getData from '../api/getData';

const imgSlice = createSlice({
  name: 'img',
  initialState: { text: '', images: [], favoriteImages: [], isFirstLoad: true, error: {} },
  reducers: {
    addText: (state, { payload }) => {
      state.text = payload;
    },
    setFirstLoad: (state, { payload }) => {
      state.isFirstLoad = payload;
    },
    addFavorite: (state, { payload }) => {
      if (!state.favoriteImages.some((item) => item.id === payload.id)) {
        state.favoriteImages.push(payload);
      }
    },
    removeFavorite: (state, { payload }) => {
      const newState = state.favoriteImages.filter((item) => item.id !== payload.id);

      state.favoriteImages = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, { payload }) => {
        const newState = payload.results
          ? payload.results.map((item) => ({
              id: item.id,
              url: item.urls.small,
              author: item.user.name,
            }))
          : payload.map((item) => ({
              id: item.id,
              url: item.urls.small,
              author: item.user.name,
            }));

        if (state.isFirstLoad) {
          state.images = newState;
          state.isFirstLoad = false;
        } else if (payload.results) {
          state.images = [...state.images, ...newState];
        } else {
          state.images = [...state.images, ...newState];
        }
      })
      .addCase(getData.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { addText, setFirstLoad, addFavorite, removeFavorite } = imgSlice.actions;

export default imgSlice.reducer;
