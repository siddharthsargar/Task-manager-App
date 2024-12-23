import React from 'react'

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  console.log('currentFilter in TaskFilter is',currentFilter)
  console.log('onFilterChange in TaskFilter is',onFilterChange)
  return (
    <div>
        <button onClick={() => onFilterChange('All')} className={currentFilter === 'All' ? 'active': ''}>All</button>
        <button onClick={() => onFilterChange('Completed')} className={currentFilter === 'Completed' ? 'active': ''}>Completed</button>
        <button onClick={() => onFilterChange('Pending')} className={currentFilter === 'Pending' ? 'active': ''}>Pending</button>
    </div>
  );
};

export default TaskFilter;