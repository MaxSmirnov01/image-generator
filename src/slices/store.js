import { configureStore } from '@reduxjs/toolkit';

import imageReducer from './imgSlice';
import pageReducer from './pageSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
    pages: pageReducer,
  },
});

export default store;
