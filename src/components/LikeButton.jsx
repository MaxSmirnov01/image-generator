import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Popover, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorite, removeFavorite } from '../slices/imgSlice';

const LikeButton = ({ item }) => {
  const { favoriteImages } = useSelector((state) => state.images);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFavorite, setIsFavorite] = useState(favoriteImages.some((el) => el.id === item.id));
  const dispatch = useDispatch();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addFavorite(item));
    } else {
      dispatch(removeFavorite(item));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <IconButton
      aria-label="add to favorites"
      color="error"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onClick={handleClick}
    >
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 0.2 }}>Like</Typography>
      </Popover>
    </IconButton>
  );
};

export default LikeButton;
