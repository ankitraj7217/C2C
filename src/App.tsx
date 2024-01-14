import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import appRouter from './Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
