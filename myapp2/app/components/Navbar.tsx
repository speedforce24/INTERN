'use client';
import Logo from "../../public/img/logo2.png";
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
interface NavbarState {
  clicked: boolean;
}

class Navbar extends Component<{}, NavbarState> {
  state: NavbarState = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
    }));
  };

  render() {
    return (
      <nav>
          <Image src={Logo} alt="Logo" />
         
        <div>
        
          <ul
            id="navigation"
            className={this.state.clicked ? '#navigation active' : '#navigation'}
          >
            <li>
              <a className="active" href="index.html">
                About
              </a>
            </li>
            <li>
              <a href="index.html">Teach</a>
            </li>
            <li>
              <a href="index.html">Buy Learning Tablet</a>
            </li>
            <li>
              <a href="index.html">Donate Devices</a>
            </li>
            <li>
              <a href="index.html">Matric</a>
            </li>
            <button className="custom">Login</button>
            <button className="custom">Contact</button>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
