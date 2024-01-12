import React, { useState} from 'react';
import "./NavBar.css"


const NavBar = () => {
    return (
      <div className='navbar'>
        <div className='nav_logo'>
          <a
            href="./"
            target="_self"
            rel="noreferrer"
          >
            <img src="/assets/logo.svg" alt="Brand Logo" width="150" height="150" />
          </a>
        </div>
        <div className="nav" fixed="top">
            <div className="nav_headings">
              <div className="nav_items">
                <a
                  href="/#about"
                  target="_self"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>About</h2>
                </a>
              </div>
              <div className="nav_items">
                <a
                  href="./Projects"
                  target="_self"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>Projects</h2>
                </a>
              </div>
              <div className="nav_items">
                <a
                  href="./Timeline"
                  target="_self"
                  rel="noopener noreferrer"
                >
                    <h2 className='nav_text'>Timeline</h2>
                </a>
              </div>
              <div className="nav_items">
                <a
                  href="./Resume"
                  target="_self"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>Resume</h2>
                </a>
              </div>
            </div>
        </div>
      </div>
    );
}

export default NavBar;