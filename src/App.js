import React from 'react';
import './App.css';
import TaskContextProvider from './contexts/TaskContext';
import TaskSection from './components/TaskSection';

function App() {
  return (
    <TaskContextProvider>  
        <TaskSection />
    </TaskContextProvider>
  );
}

export default App;
