import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Favorites from './components/Pages/Favorites';
import Cart from './components/Pages/Cart';
import Profile from './components/Pages/Profile';
import Register from './components/Pages/Register';
import SignIn from './components/Pages/Sign-In';
import ContextProvider from './components/Features/ContextProvider';


function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </ContextProvider>

  );
}

export default App;
