import React from 'react'
import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim()) {
        onAddTask({description: taskDescription})
        setTaskDescription("");
    }
  };

  return (
    <div>
        <input
            type='text'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder='Enter Task Description'
        />
        <button onClick={handleAddTask}>AddTask</button>      
    </div>
  );
};

export default AddTask;