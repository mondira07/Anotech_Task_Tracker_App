import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const TaskForm = ({ onAddTask, darkMode }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      onAddTask({ name: taskName, description: taskDescription });
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Task Name"
          variant="outlined"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          sx={{ marginBottom: "1rem ", color: darkMode ? '#143200' : 'white', backgroundColor : darkMode ? "EEEAD9" : "#143200", 
          "&:hover": {
            backgroundColor:
              darkMode ? "#121212" : "#EFEFEF",
            color: darkMode ? "#fff" : "#000",}} 
          }
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskForm;