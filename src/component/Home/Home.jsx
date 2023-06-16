import React ,{Component}from "react";
import Nav from "../../nav/Nav";
import "./Home.css";


class Home extends Component {
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
         <div className='pass'>
                {this.state.miki.map(miki => (
                  <div key={miki.id} className='app1'>
                    <img src={miki.urls.regular} alt={miki.description} />
                  </div>
                ))}
              </div>
              </div>
            );
    }

}
export default Home;