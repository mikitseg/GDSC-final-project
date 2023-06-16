
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dog from './component/Dog/Dog';
import Birds from './component/Birds/Birds';
import Beach from './component/Beach/Beach';
import Cat from './component/cat/Cat';
import Home from './component/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dog" element={<Dog />} />
            <Route path="/beach" element={<Beach />} />
            <Route path="/birds" element={<Birds />} />
            <Route path="/cat" element={<Cat />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


/*import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./nav/Nav";
import Dog from './component/Dog/Dog';
import Birds from './component/Birds/Birds';
import Beach from './component/Beach/Beach';
import Cat from './component/cat/Cat';

function App(){
  return(
   <div className="App">
    <Nav/>
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route pah="cat" element={<Cat/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export defualt App;*/

