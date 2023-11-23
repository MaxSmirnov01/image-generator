import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import MainPage from './MainPage';
import FavoriteImages from './FavoriteImages';
import routes from '../routes';

const App = () => (
  <div>
    <Router>
      <Navigation />
      <Routes>
        <Route path={routes.mainPath()} element={<MainPage />} />
        <Route path={routes.favoritesPath()} element={<FavoriteImages />} />
      </Routes>
    </Router>
    <ToastContainer />
  </div>
);

export default App;
