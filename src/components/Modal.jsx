import React from 'react';
import { Box, Dialog } from '@mui/material';

const Modal = ({ isDialogOpen, setIsDialogOpen, img }) => {
  const handleDialogClose = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleImageClick = () => {
    handleDialogClose();
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleDialogClose} maxWidth="md" sx={{ cursor: 'zoom-out' }}>
      <Box onClick={handleImageClick}>
        <img
          src={img.modalUrl || img.file}
          alt={img.description}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
    </Dialog>
  );
};

export default Modal;
