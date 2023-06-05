import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'pending'
  });

  const handleInputChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask({
      title: '',
      description: '',
      status: 'pending'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
