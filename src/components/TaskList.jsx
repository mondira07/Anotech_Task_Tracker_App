import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button, TextField, Box } from '@mui/material';
import { Edit, Delete, Done } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const TaskList = ({ tasks, onDeleteTask, onEditTask, onMarkTaskAsCompleted, darkMode }) => {
  const [filterKeyword, setFilterKeyword] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleFilter = (e) => {
    setFilterKeyword(e.target.value);
  };

  const handleEdit = (index, name, description) => {
    setEditIndex(index);
    setEditedName(name);
    setEditedDescription(description);
  };

  const handleSave = (index) => {
    onEditTask(index, editedName, editedDescription);
    setEditIndex(-1);
    setEditedName('');
    setEditedDescription('');
  };

  const handleCancel = () => {
    setEditIndex(-1);
    setEditedName('');
    setEditedDescription('');
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  const sortedTasks = filteredTasks.slice().sort((a, b) => {   
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
              {editIndex === index ? (
                <>
                  <TextField
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <TextField
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                  <Button onClick={() => handleSave(index)} sx={{ color: darkMode ? 'white' : 'primary.dark' }}>Save</Button>
                  <Button onClick={handleCancel} sx={{ color: darkMode ? 'white' : 'primary.dark' }}>Cancel</Button>
                </>
              ) : (
                <>
                  <IconButton onClick={() => handleEdit(index, task.name, task.description)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => onDeleteTask(index)}>
                    <Delete />
                  </IconButton>
                  {!task.completed && (
                    <Button
                      onClick={() => onMarkTaskAsCompleted(index)}
                      startIcon={<Done />}
                      sx={{ color: darkMode ? 'white' : 'primary.dark' }}   
                    >
                      Mark as Completed
                    </Button>
                  )}
                </>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;