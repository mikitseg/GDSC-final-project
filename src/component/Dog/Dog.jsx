import React, { Component } from 'react';
import './dog.css';

class Dog extends Component {
  constructor() {
    super();
    this.state = {
        dog: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?client_id=YNAXXbFMyzgzG8E0tRlZQK1vHh3K3kAVYbM88ijfTfY&count=20&query=dog')
      .then(response => response.json())
      .then(data => {
        this.setState({  dog: data })
      });
  }

  render() {
    return (
      <div className='dog'>
      <h2>Dog</h2>
        <div className='pass'>
        {this.state. dog.map(dog => (
          <div key={ dog.id} className='app1'>
            <img src={ dog.urls.regular} alt={ dog.description} />
          </div>
        ))}
        </div>
        
      </div>
    );
  }
}

export default  Dog;
