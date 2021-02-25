import React from 'react'

import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"


const Banner = () => {
    return (
        <header className="header">
            <div class="header-content">
                <h1>
                    Hi, I am Kinga Kalisz
                </h1>
                <h2>
                    I am looking for a job as a Junior Front-end Developer.
                </h2>
                <div className="icons">
                    <ul>
                    <li><FaLinkedin /></li>
                    <li><FaGithub /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Banner
