
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./nav/Nav";
import Dog from './component/Dog/Dog';
import Birds from './component/Birds/Birds';
import Beach from './component/Beach/Beach';
import Cat from './component/cat/Cat';

class App extends Component {
  constructor() {
    super();
    this.state = {
      miki: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?client_id=YNAXXbFMyzgzG8E0tRlZQK1vHh3K3kAVYbM88ijfTfY&count=20&query=beach,cat,dog,bird')
      .then(response => response.json())
      .then(data => {
        this.setState({ miki: data })
      });
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div className='pass'>
              {this.state.miki.map(miki => (
                <div key={miki.id} className='app1'>
                  <img src={miki.urls.regular} alt={miki.description} />
                </div>
              ))}
            </div>} />
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

