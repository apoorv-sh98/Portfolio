import React, { useState} from 'react';
import "./NavBar.css"


const NavBar = () => {
    return (
        <div 
            className="nav"
            fixed="top"

        >
            <div className="nav_headings">
              <div className="nav_items">
                <a
                  href="./Projects"
                  target="_blank"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>PROJECTS</h2>
                </a>
              </div>
              <div className="nav_items">
                <a
                  href="./workEx"
                  target="_blank"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>WORK-EX</h2>
                </a>
              </div>
              <div className="nav_items">
                <a
                  href="./Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                    <h2 className='nav_text'>RESUME</h2>
                </a>
              </div>
            </div>
        </div>
    );
}

export default NavBar;