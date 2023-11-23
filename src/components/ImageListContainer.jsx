import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { toast } from 'react-toastify';
import getData from '../api/getData';
import Pagination1 from './Pagination1';
import LikeButton from './LikeButton';
import { setFirstLoad } from '../slices/imgSlice';
import handleError from '../api/handleError';
import { defaultValues } from '../slices/pageSlice';

const { contentCount } = defaultValues;

const ImageListContainer = () => {
  const { images, isFirstLoad, error } = useSelector((state) => state.images);
  const { page } = useSelector((state) => state.pages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(getData({}));
      dispatch(setFirstLoad(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (error && error.status) {
    const message = handleError(error);
    toast.error(message, {
      position: 'top-left',
      icon: '🆘',
    });
  }

  const lastIndex = page * contentCount;
  const firstIndex = lastIndex - contentCount;
  const currentImages = images.slice(firstIndex, lastIndex);

  return (
    <Box component="section" sx={{ margin: '30px 40px' }}>
      <ImageList variant="masonry" gap={20} cols={3}>
        {currentImages.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '20px',
              boxShadow: '0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src={item.url} alt={item.description} loading="lazy" />
            <ImageListItemBar
              title={item.description}
              subtitle={<span>by: {item.author}</span>}
              position="below"
              actionIcon={<LikeButton item={item} />}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination1 />
    </Box>
  );
};

export default ImageListContainer;
