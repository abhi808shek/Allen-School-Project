import React from 'react'
import Btech from './Components/Btech/Btech';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Mba from './Components/Mba/Mba';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import Courses from './Components/Courses/Courses';
import Bca from './Components/Bca/Bca';
import Bba from './Components/Bba/Bba';
import Diploma from './Components/Diploma/Diploma';
import Signup from './Components/Signup/Signup';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/courses/btech" element={<Btech />} />
        <Route exact path="/courses/mba" element={<Mba />} />
        <Route exact path="/courses/bca" element={<Bca />} />
        <Route exact path="/courses/bba" element={<Bba />} />
        <Route exact path="/courses/diploma" element={<Diploma />} />
      </Routes>
     
    
    </>
  )
}

export default App;