import React, { Component } from 'react';
import './beach.css';

class Beach extends Component {
  constructor() {
    super();
    this.state = {
      beach: []
    };
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/random?client_id=YNAXXbFMyzgzG8E0tRlZQK1vHh3K3kAVYbM88ijfTfY&count=20&query= beach')
      .then(response => response.json())
      .then(data => {
        this.setState({  beach: data })
      });
  }

  render() {
    return (
      <div>
        <h1 className='beach'>BEACH</h1>
        <div className='pass'>
        {this.state. beach.map( beach => (
          <div key={ beach.id} className='app1'>
            <img src={ beach.urls.regular} alt={ beach.description} />
          </div>
        ))}
        </div>
        
      </div>
    );
  }
}

export default  Beach;
