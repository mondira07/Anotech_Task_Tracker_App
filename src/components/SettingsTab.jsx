import React from 'react';
import { Typography, FormGroup, FormControlLabel, Switch, Divider, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

const SettingsTab = ({ darkTheme, onThemeChange, language, onLanguageChange }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Settings
      </Typography>
      <Divider />
      <FormGroup>
      
        <Select
          value={language}
          onChange={onLanguageChange}
          label="Language"
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Chinese">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
      </FormGroup>
    </div>
  );
};

export default SettingsTab;