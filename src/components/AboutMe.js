import React from 'react'

import './css/AboutMe.css'

import foto from '../img/ja-2ps.png'
import Pdf from '../doc/CV.pdf';



const AboutMe = () => {
  const [state] = React.useState([
    { key: '1', id: 1, title: "City:", text: "Warsaw, Poland" },
    { key: '2', id: 2, title: "Availability:", text: "one week - negotiable" },
    { key: '3', id: 3, title: "Disposability:", text: "3 days in week - negotiable" }
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
                In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                efficitur sagittis, urna est ultricies eros, ac porta sem turpis
              </p>
              <div className="about-contact">
                  {state.map((info) => (
                    <div className="about-contact-p">
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
