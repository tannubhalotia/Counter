import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export class NavBar extends React.Component {
    render() {
        return (
            <div>
            <Navbar className="navbar-dark" fluid>
                <input/>
                <button>Search</button>
                <button>SignIn</button>
                <button>SignOut</button>
            </Navbar>
            </div>
        );

    }
}

