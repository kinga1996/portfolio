import React from 'react'

import './css/Banner.css';

import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import foto from '../img/ja1-ps.png'

const Banner = () => {
    return (
        <header className="section header">
            <div className="header-content">
                <h1>
                    Hi, I am Kinga Kalisz!
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
            <div className="header-foto">
                <img src={foto} alt="foto me" />
            </div>
        </header>
    )
}

export default Banner
