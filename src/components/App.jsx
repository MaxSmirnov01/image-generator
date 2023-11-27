import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import MainPage from './Pages/MainPage';
import FavoritePage from './Pages/FavoritePage';
import routes from '../routes';
import ColorModeContext from '../contexts';
import setDisign from '../theme';

const App = () => {
  const [mode, setMode] = useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(setDisign(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Router>
            <Navigation />
            <Routes>
              <Route path={routes.mainPath()} element={<MainPage />} />
              <Route path={routes.favoritesPath()} element={<FavoritePage />} />
            </Routes>
          </Router>
          <ToastContainer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
