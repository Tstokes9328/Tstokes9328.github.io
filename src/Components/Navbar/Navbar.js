import React, {Component} from 'react'
import {Link} from 'react-router-dom';


//StyleSheets
import 'reset-css';
import './Navbar.css';

class Navbar extends Component{
  constructor(){
    super()

    this.state = {
      flag: true
    }
  }

  render(){
    return (
      <div className="navbar-container">
        <section className="navbar-main-design">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Me</li></Link>
            <Link to=""><li>Portfolio</li></Link>
          </ul>
        </section>
  
        <section className="nav-menu-dropdown-container">
          {
            this.state.flag ? 
            <div className="menu-patty-container" onClick={() =>    this.setState({flag: !this.state.flag})}>
              <img src={require('../../assets/nav-icon.png')} alt="navbar-mobile-icon"/>
            </div>

            :
            <div>
              <div className="menu-patty-container" onClick={() => this.setState({flag: !this.state.flag})}>
                <img src={require('../../assets/nav-icon.png')} alt="navbar-mobile-icon"/>
              </div>

              <div className="drop-down">
                <section>About</section>
                <section>Skills</section>
                <section>Portfolio</section>
                <section>Contact</section>
              </div>
            </div>
          }
        </section>
      </div>
    )
  }
}

export default Navbar;