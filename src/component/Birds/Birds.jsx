import React, { Component } from 'react';
import './birds.css';

class Birds extends Component {
  constructor() {
    super();
    this.state = {
        birds: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?client_id=YNAXXbFMyzgzG8E0tRlZQK1vHh3K3kAVYbM88ijfTfY&count=20&query= birds')
      .then(response => response.json())
      .then(data => {
        this.setState({  birds: data })
      });
  }

  render() {
    return (
      <div>
        <h1 className='bird'>BIRDS</h1>
        <div className='pass'>
        {this.state. birds.map(birds => (
          <div key={ birds.id} className='app1'>
            <img src={ birds.urls.regular} alt={ birds.description} />
          </div>
        ))}
        </div>
        
      </div>
    );
  }
}

export default  Birds;
