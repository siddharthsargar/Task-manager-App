// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

const App =() => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks): [];
  }
  );

  // State to handle filtering tasks
  const [filter, setFilter] = useState('All');

  // Update local storage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a task
  const addTask = (task) => {
    console.log("task is", task)
    setTasks([...tasks, {...task, id: Date.now(), completed: false}])
  };


  // Remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed}: task));
  };


  //Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // 'All' Case
  });

  console.log('setFilter in App is',setFilter)
  return (
    <div className='App'>
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask}/>
      <TaskFilter currentFilter={filter} onFilterChange={setFilter}/>
      <TaskList 
        tasks={filteredTasks}
        onToggleCompletion={toggleTaskCompletion}
        onTaskRemove={removeTask}
      />
    </div>
  );
}



export default App;
