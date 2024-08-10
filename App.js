import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import Timer from './Timer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [interval, setInterval] = useState(25); // Default Pomodoro interval is 25 minutes

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, timeSpent: 0 }]);
  };

  const startTask = (task) => {
    setCurrentTask(task);
  };

  const handleTimeUpdate = (time) => {
    setTasks(tasks.map(task => task === currentTask ? { ...task, timeSpent: time } : task));
  };

  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <TaskList tasks={tasks} onAddTask={addTask} onStartTask={startTask} />
      {currentTask && <Timer task={currentTask} interval={interval} onTimeUpdate={handleTimeUpdate} />}
    </div>
  );
}

export default App;
