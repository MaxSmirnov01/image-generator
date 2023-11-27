import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Stack } from '@mui/material';
import { defaultValues, setFavoritePage } from '../../slices/pageSlice';

const { contentCount } = defaultValues;

const Pagination2 = ({ favoriteImages, currentImages }) => {
  const dispatch = useDispatch();

  const { favoritePage } = useSelector((state) => state.pages);

  const pageCount = Math.ceil(favoriteImages.length / contentCount);

  useEffect(() => {
    if (currentImages.length === 0 && favoritePage > 1) {
      dispatch(setFavoritePage(favoritePage - 1));
    }
  }, [currentImages, dispatch, favoritePage]);

  if (favoriteImages.length === 0) {
    return null;
  }

  const handleChange = (event, value) => {
    dispatch(setFavoritePage(value));
  };

  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Pagination count={pageCount} page={favoritePage} onChange={handleChange} shape="rounded" />
    </Stack>
  );
};

export default Pagination2;
