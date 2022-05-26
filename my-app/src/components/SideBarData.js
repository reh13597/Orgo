import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import TodayIcon from '@mui/icons-material/Today';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Today',
    path: '/today',
    icon: <TodayIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <CalendarMonthIcon/>,
    cName: 'nav-text'
  },
];