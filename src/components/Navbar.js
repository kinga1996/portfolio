import React, { Component } from 'react'
import { Link } from "react-scroll";

import './css/Navbar.css';

//const ScrollLink = Scroll.ScrollLink

class Navbar extends Component {

    render(){
    return (
        <div className="section navbar">
            <div className="navbar-content">
                <ul>
                <li>
                    <Link
                        href=".about"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        About Me
                        </Link>
                </li>
                <li>
                    <Link
                        href=".projects"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        My Projects
                        </Link>
                </li>
                <li>
                    <Link
                        href=".skills"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        Skills
                        </Link>
                </li>
                <li>
                    <Link
                        href=".contact"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        Contact
                        </Link>
                </li>
                </ul>
</div>
        </div>
    )
    }
}

export default Navbar
