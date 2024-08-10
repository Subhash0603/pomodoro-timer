import React, { useState } from 'react';

function TaskList({ tasks, onAddTask, onStartTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task-card">
            <span>{task.name}</span>
            <span>Time Spent: {task.timeSpent} minutes</span>
            <button onClick={() => onStartTask(task)}>Start</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
