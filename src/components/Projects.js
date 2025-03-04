import React from 'react'

import './css/Projects.css'

import fotoweather from '../img/projects/weather.png'
import fototodo from '../img/projects/to-do.png'
import fotowebcam from '../img/projects/webcam.png'
import fotospeech from '../img/projects/speech.png'

const Projects = () => {
    const [state] = React.useState([
        {
            id: 1,
            heading: "Weather App",
            technologies: "ReactJS, CSS",
            code: "https://github.com/kinga1996/react-weather-app",
            link: "https://kinga1996.github.io/react-weather-app/",
            tcode: "github.com/kinga1996/react-weather-app",
            tlink: "kinga1996.github.io/react-weather-app/",
            foto: fotoweather
        },
        {
            id: 2,
            heading: "To do list",
            technologies: "HTML, CSS, JavaScript",
            code: "https://github.com/kinga1996/to-do",
            link: "https://kinga1996.github.io/to-do/",
            tcode: "github.com/kinga1996/to-do",
            tlink: "kinga1996.github.io/to-do/",
            foto: fototodo
        },
        {
            id: 3,
            heading: "Webcam fun",
            technologies: "HTML, CSS, JavaScript",
            code: "https://github.com/kinga1996/webcam-fun",
            link: "https://kinga1996.github.io/webcam-fun/",
            tcode: "github.com/kinga1996/webcam-fun",
            tlink: "kinga1996.github.io/webcam-fun/",
            foto: fotowebcam
        },
        {
            id: 4,
            heading: "Speech recognition",
            technologies: "HTML, CSS, JavaScript",
            code: "https://github.com/kinga1996/speech-recognition",
            link: "https://kinga1996.github.io/speech-recognition/",
            tcode: "github.com/kinga1996/speech-recognition",
            tlink: "kinga1996.github.io/speech-recognition/",
            foto: fotospeech
        }
    ]);
    return(
        <div className="section projects">
            <h1>My Projects</h1>

        <div className="projects-info">
            {state.map((info) => (
                <div key={info.id} className="projects-info-p">
                    <img src={info.foto} alt="Screenshot of my project" />
                    <h5>{info.heading}</h5>
                    <h6>Technologies:</h6>
                    <p>{info.technologies}</p>
                    <h6>The code:</h6>
                    <a href={info.code} target = "_blank">{info.tcode}</a>
                    <h6>The website:</h6>
                    <a href={info.link} target = "_blank">{info.tlink}</a>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Projects