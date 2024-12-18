import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import ListPage from './pages/List';
import { useEffect } from 'react';

function App() {



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list/:id' element={<ListPage />} />
    </Routes>
  );
}

export default App;
