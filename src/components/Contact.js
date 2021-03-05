import React from 'react'

const Contact = () => {
    const [state] = React.useState([
    { id: 1, title: "Email:", text: "kingakalisz@gmail.com"},
    { id: 2, title: "LinkedIn:", text: "www.linkedin.com/in/kinga-kalisz"},
    ])
    return (
        <div className="contact">
            <h1>Contact</h1>
            <h3>Please feel free to contact me. I will try to respond as soon as possible.</h3>
            <div className="contact-map">
                  {state.map((info) => (
                    <div className="contact-map-p">
                      <h6>{info.title}</h6>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
        </div>
    )
}

export default Contact
