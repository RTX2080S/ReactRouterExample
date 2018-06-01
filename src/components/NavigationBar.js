import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1'>Page 1</Link></li>
                <li><Link to='/page2'>Page 2</Link></li>
            </ul>
        );
    }
}

export default NavigationBar;
