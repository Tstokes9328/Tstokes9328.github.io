import React, {Component} from 'react'

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
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
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