import React from 'react'
import foto from '../img/ja-2ps.png'

const AboutMe = () => {
    return (
        <div className="about">
            <h1 className="section-header">
                About Me
            </h1>
            <div className="section-content-am">
                <h3>Hi!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ut justo ac sodales. Vestibulum quis ipsum elementum nunc gravida pellentesque.
                    Donec sit amet dapibus mauris.
                    Morbi in quam commodo, pellentesque turpis non, porta leo. Nam varius magna vitae nulla pharetra, sed laoreet elit elementum.</p>
            </div>
            <div className="section-img-am">
                <img src={foto} alt="foto me" />
            </div>
        </div>
    )
}

export default AboutMe