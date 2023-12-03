import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import notFound from '../../assets/notFound.png';
import routes from '../../routes';

const NotFound = () => (
  <Box sx={{ marginTop: '30px' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <img src={notFound} alt="not found" />
    </Box>
    <Box sx={{ textAlign: 'center', paddingTop: '10px' }}>
      <Button href={routes.mainPath()} variant="outlined" startIcon={<ArrowBackIcon />} sx={{ fontWeight: 'bold' }}>
        На главную
      </Button>
    </Box>
  </Box>
);

export default NotFound;
