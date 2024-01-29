import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import MainPage from './Pages/MainPage';
import FavoritePage from './Pages/FavoritePage';
import NotFound from './Pages/404notFound';
import routes from '../routes';
import ColorModeContext from '../contexts';
import setDisign from '../theme';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

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
        <Router>
          <Navigation />
          <Routes>
            <Route path={routes.mainPath()} element={<MainPage />} />
            <Route path={routes.favoritesPath()} element={<FavoritePage />} />
            <Route path={routes.notFoundPath()} element={<NotFound />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
