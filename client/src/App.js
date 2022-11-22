import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import FrontRouter from './components/FrontRouter';

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <FrontRouter />
    </BrowserRouter>
  );
};

export default App;
