import React from 'react'

const TaskItem = ({ task, onToggleCompletion, onTaskRemove}) => {
  return (
    <li>
        <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
            onClick={() => onToggleCompletion(task.id)}
        >
            {task.description}
        </span>
        <button onClick={() => onTaskRemove(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;