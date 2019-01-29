import React from 'react';
import  './Header.css';
const Header= (props)=> {

    return (
        <div className="header-wrapper">
            <h1 className="header-wrapper-header"> {props.heading}</h1>
        </div>
    )
}

export default Header;