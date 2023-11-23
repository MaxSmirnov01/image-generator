import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Popover, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFavorite } from '../slices/imgSlice';

const DeleteButton = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    dispatch(removeFavorite(item));
  };

  return (
    <IconButton
      aria-label="delete"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onClick={handleClick}
    >
      <DeleteIcon />
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
        <Typography sx={{ p: 0.2 }}>Delete</Typography>
      </Popover>
    </IconButton>
  );
};

export default DeleteButton;
