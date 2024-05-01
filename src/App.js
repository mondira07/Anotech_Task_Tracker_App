import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TaskTrackerApp from './TaskTrackerApp';
import CompletedTasks from './CompletedTasks';
import Settings from './Settings';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTasks(storedTasks);
    setCompletedTasks(storedCompletedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    completedTask.completed = true;
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(newTasks);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TaskTrackerApp addTask={addTask} tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete} />
        </Route>
        <Route path="/completed">
          <CompletedTasks tasks={completedTasks} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete} />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;