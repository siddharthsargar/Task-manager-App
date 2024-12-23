import React from 'react'
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleCompletion, onTaskRemove }) => {
  return (
    <div>
        <ul>
            {tasks.map((task) => (
              <TaskItem 
              key={task.id}
              task={task}
              onToggleCompletion={onToggleCompletion}
              onTaskRemove={onTaskRemove}
              />
            )      
            )}
        </ul>
    </div>
  );
};

export default TaskList;