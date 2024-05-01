import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import TaskTrackerApp from './TaskTrackerApp';
import './index.css';

ReactDOM.render(
  <>
    <CssBaseline />
    <TaskTrackerApp />
  </>,
  document.getElementById('root')
);