import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Используй BrowserRouter
import Header from './copmonents/Header/Header';
import Home from './pages/Home/Home'; 

function App() {


  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
