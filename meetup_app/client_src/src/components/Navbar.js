import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">Meetups</a>
                        <a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
                        <ul id="nav-mobile" className="right hide-on-small-only">
                            <li><Link to="/"><i className="fa fa-users"></i>Meetups</Link></li>
                        </ul>
                        <ul className="sidenav" id="main-menu">
                            <li><Link to="/"><i className="fa fa-users"></i>Meetups</Link></li>
                            <li><Link to="/meetups/add"><i className="fa fa-plus"></i>Add Meetups</Link></li>
                            <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;