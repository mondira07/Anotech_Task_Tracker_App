import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, TextField, Box } from '@mui/material';
import { Edit, Delete, Done } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TaskList = ({ tasks, onDeleteTask, onEditTask, onMarkTaskAsCompleted, darkMode }) => {
  const [filterKeyword, setFilterKeyword] = useState('');

  const handleFilter = (e) => {
    setFilterKeyword(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    // Sort tasks alphabetically by name
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <Box>
      <TextField
        label="Search Tasks"
        variant="outlined"
        fullWidth
        value={filterKeyword}
        onChange={handleFilter}
        sx={{ mb: 2 }}
      />
      <List>
        {sortedTasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task.name} secondary={task.description} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => onEditTask(index, task.name, task.description)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDeleteTask(index)}>
                <Delete />
              </IconButton>
              {!task.completed && (
                <Button
                  onClick={() => onMarkTaskAsCompleted(index)}
                  startIcon={<Done />}
                  sx={{ color: darkMode ? 'white' : 'primary.dark' }} // Change color based on dark mode
                >
                  Mark as Completed
                </Button>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
