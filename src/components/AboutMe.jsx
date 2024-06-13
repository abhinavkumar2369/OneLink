import './AboutMe.css'

import cross from '../assets/cross.svg'

function AboutMe({toggle}){
    
    return (
        <>
            <div className="modal-content">

                {/* Back Button */}
                <span className='back-button-box'>
                    <span>
                        ABOUT  ME :
                    </span>
                    <button onClick={toggle}>
                        <img src={cross} alt='cross' />
                    </button>
                </span>
                
                {/* Content */}
                <div className='about-me-content'>
                    <li>Hi, I am Abhinav Kumar.</li>
                    <li>I am a Full Stack Web Developer. I have experience in building web applications using React, Node.js, Express, and MongoDB.I have also worked on projects using MERN stack.</li>
                    <li>I am passionate about learning new technologies and building projects.</li>
                    <li>I am currently looking for opportunities as a Full Stack Web Developer.</li>
               </div>
            </div>
        </>
    )
}

export default AboutMe;