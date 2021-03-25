import React from 'react'

import './css/Skills.css'

const Skills = () => {
    const [state] = React.useState([
        { id: 1, text: "HTML5, CSS3, JavaScript" },
        { id: 2, text: "ReactJS" },
        { id: 3, text: "Typescript - basic knowledge" },
        { id: 4, text: "NodeJS -  basic knowledge" },
        { id: 5, text: "Git" },
        { id: 6, text: "Jira" },
        { id: 7, text: "Python" },
        { id: 8, text: "Editors: Visual Studio Code, Sublime Text, PyCharm" },
        { id: 0, text: "Graphics: Photoshop, Canva" },
        { id: 10, text: "Operating systems: Windows, Linux" },
        { id: 11, text: "English B2 (willingness to develop)" },
        { id: 12, text: "Advanced search in StackOverflow and Google :)" }
      ]);

    return (
        <div className="section skills">
            <h1>Skills</h1>
            <div className="skills-details">
                  {state.map((info) => (
                      <p key={info.id} ><span className="skills-details-beg">>> </span>{info.text}</p>
                  ))}
            </div>
        </div>
    )
}

export default Skills