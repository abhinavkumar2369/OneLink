import './Links.css';
import { useState } from 'react';
import AboutMe from './AboutMe';
import portpolio from '../assets/portfolio.svg';
import about_me from '../assets/about_me.svg';

function Links(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const links = [
        {
            name: 'Portfolio Website',
            url: 'https://abhinavkumarofficial.com/',
        },
    ]



    return (
        <>
           <div className="links">

                {/* Links */}
                {
                    links.map((link, index) => {
                        return (
                            <a key={index} href={link.url} target="_blank" rel="noreferrer" className='box-links'>
                                <img src={portpolio} alt="" className='left-side'/>
                                {link.name}
                            </a>
                        )
                    })
                }
            
                {/* About Me */}
                <a onClick={toggle} className='box-links'>
                    <img src={about_me} className='left-side'/>
                    {'About Me'}
                </a>

                {/* Modal */}
                { isOpen && (
                    <AboutMe toggle={toggle} />
                )
                }
           </div>
        </>
    )
}

export default Links;