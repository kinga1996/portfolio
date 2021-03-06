import React from 'react'

import './css/Contact.css'

const Contact = () => {
    const [state] = React.useState([
    { id: 1, title: "Email:", text: "kingakalisz@gmail.com"},
    { id: 2, title: "LinkedIn:", text: "www.linkedin.com/in/kinga-kalisz"},
    ])
    return (
        <div className="section contact">
            <h1>Contact</h1>
            <h3>Please feel free to contact me. I will try to respond as soon as possible.</h3>
            <div className="contact-map">
                  {state.map((info) => (
                    <div className="contact-map-p">
                      <h4>{info.title}</h4>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
        </div>
    )
}

export default Contact
