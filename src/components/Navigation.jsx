import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import routes from '../routes';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'Поиск', icon: <SearchIcon />, route: routes.mainPath() },
    { label: 'Избранное', icon: <FavoriteIcon />, route: routes.favoritesPath() },
  ];

  const activeTabIndex = tabs.findIndex((tab) => location.pathname === tab.route);

  const handleChange = (event, newValue) => {
    const selectedTab = tabs[newValue];
    navigate(selectedTab.route);
  };

  return (
    <Tabs value={activeTabIndex} onChange={handleChange} aria-label="tabs" sx={{ marginRight: '40px' }}>
      {tabs.map((tab) => (
        <Tab key={tab.label} icon={tab.icon} label={tab.label} iconPosition="start" />
      ))}
    </Tabs>
  );
};

export default Navigation;
