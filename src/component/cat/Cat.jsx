import React, { Component } from 'react';
import './cat.css';

class Cat extends Component {
  constructor() {
    super();
    this.state = {
        cat: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?client_id=YNAXXbFMyzgzG8E0tRlZQK1vHh3K3kAVYbM88ijfTfY&count=20&query=cat')
      .then(response => response.json())
      .then(data => {
        this.setState({  cat: data })
      });
  }

  render() {
    return (
      <div>
        <h1 className='cat'>CAT</h1>
        <div className='pass'>
        {this.state. cat.map(cat => (
          <div key={ cat.id} className='app1'>
            <img src={ cat.urls.regular} alt={ cat.description} />
          </div>
        ))}
        </div>
        
      </div>
    );
  }
}

export default  Cat;
