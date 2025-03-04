import React from 'react'

import './css/AboutMe.css'

import foto from '../img/ja-2ps.png'
import Pdf from '../doc/CV.pdf';

const AboutMe = () => {
  const [state] = React.useState([
    { id: 1, title: "City:", text: "Warsaw, Poland" },
    { id: 2, title: "Availability:", text: "one week - negotiable" },
    { id: 3, title: "Disposability:", text: "3 days in week - negotiable" }
  ]);
  return (
    <div className="section about">
            <h1>About Me</h1>
            <div className="about-img">
                <img src={foto} alt="foto me" />
            </div>
            <div className="about-info">
              <h2>Hi!</h2>
              <p>
              I am ambitious and always willing to self-development person,
              whose one of the main hobby is computer science (since primary
              school, the program Logomocja and websites created in HTML based on tables :) ).
              <br></br>Since June 2020, I am developing my skills to become a really great Front-end Developer.
              </p>
              <div className="about-contact">
                  {state.map((info) => (
                    <div key={info.id} className="about-contact-p">
                      <h6>{info.title}</h6>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
                <a href = {Pdf} target = "_blank">See my resume</a>
            </div>
    </div>
  );
};

export default AboutMe;
