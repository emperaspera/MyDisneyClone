import React from 'react';
import '../Styles/Loader.css'; // Import the CSS for the loader
import logo from '../assets/Images/logo.png';

function Loader() {
    return (
        <div className="loader">
            <img src={logo} alt="Loading..." className="loader-logo" />
        </div>
    );
}

export default Loader;
