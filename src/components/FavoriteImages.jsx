import React from 'react';
import { useSelector } from 'react-redux';
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import DeleteButton from './DeleteButton';
import Pagination2 from './Pagination2';
import { defaultValues } from '../slices/pageSlice';

const { contentCount } = defaultValues;

const FavoriteImages = () => {
  const { favoriteImages } = useSelector((state) => state.images);
  const { favoritePage } = useSelector((state) => state.pages);

  const lastIndex = favoritePage * contentCount;
  const firstIndex = lastIndex - contentCount;
  const currentImages = favoriteImages.slice(firstIndex, lastIndex);

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
              actionIcon={<DeleteButton item={item} />}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination2 favoriteImages={favoriteImages} currentImages={currentImages} />
    </Box>
  );
};

export default FavoriteImages;
