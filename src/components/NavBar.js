import React, { useState} from 'react';

const NavBar = () => {
    return (
        <div 
            className='navbar'
            fixed="top"
        >
            <h2 className='nav_name'>Apoorv Sharma</h2>
            <h2 className='nav_text'>Projects</h2>
            <h2 className='nav_text'>WorkEx</h2>
            <h2 className='nav_text'>Resume</h2>

        </div>
    );
}

export default NavBar;