import React from 'react';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          {task.status !== 'completed' && (
            <button onClick={() => updateTaskStatus(task.id)}>
              Mark as Completed
            </button>
          )}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
