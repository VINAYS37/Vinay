import logo from './logo.svg';
import './App.css';
import Header from './sample';
import Demo from './Demo';
import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './home';
import About from './About';
import Contact from './Contact';
import Services from './services';
import Application from './Header1';
import './headerstyle.css';
import Login from './login';
import Register from './register';
import Bcolor from './background';
import { Button } from 'react-bootstrap';
import StaticExample from './background';
import { Test } from './usestate';
import './LoginPage.css';  // This should match the exact file name
import API from './home';
import Employee from './Employee';



function App() {
  const data = "red";
  return (
    <div className="App">
       {/* <h1>REACT</h1>
      <Header propsData={data}/>  */}
      {/* <Application /> */}

     {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>  */}
      {/* <Bcolor /> */}
            {/* <StaticExample />
            <Test/> */}
            {/* <API/> */}
            <Employee/> 

    </div>

  );
}

export default App;
