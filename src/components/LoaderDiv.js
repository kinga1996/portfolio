import React from 'react'

import './css/LoaderDiv.css'

const LoaderDiv = () => {

    function changeVisibility() {
        const sections = document.getElementsByClassName('section')
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.add('active')
        }
        const loader = document.getElementsByClassName('loader')
        loader[0].classList.add('hidden')
        console.log(sections)
        console.log(loader)
    }
        return (
            <div className="loader">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
                <div className="loader-content">
                    <p>Hi, I am Kinga Kalisz!</p>
                    <button onClick={changeVisibility}>
                        Let's go and see more!
                    </button>
                </div>
            </div>
        )
}

export default LoaderDiv
