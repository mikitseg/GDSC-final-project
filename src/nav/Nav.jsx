import React from "react";
import { Link } from 'react-router-dom';
import "./nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="all">
        <h1 className="snap">Snapshot</h1>
        <form className="srch">
          <input className="box" type="text" placeholder="Search..." />
          <button className="search" type="submit"> Search </button>
        </form>  
        <div className="box1">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to='/cat'>Cat</Link></li>
            <li><Link to='/beach'>Beach</Link></li>
            <li><Link to='/birds'>Birds</Link></li>
            <li><Link to='/dog'>Dog</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
