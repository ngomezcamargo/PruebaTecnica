import { useState } from 'react'
import Header from './Components/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import Projects from './Components/Pages/Projects.jsx';
import AboutMe from './Components/Pages/AboutMe.jsx';
import Pomodoro from './Components/Pages/Pomodoro.jsx';
import Contact from './Components/Pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/pomodoro' element={<Pomodoro/>}/>

        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App
