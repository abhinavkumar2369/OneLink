/* eslint-disable react/prop-types */
import './Header.css'

function Header({props}){
    return (
        <>
        <div className="header">

            {/* User Image */}
            <img src={props.image} alt="" id="profile_photo"/>
            
            {/* User Name */}
            <h2>{props.name}</h2>


            {/* About  */}
            <p id="about">
                <span>
                    <img src={props.about.education.img} alt="" id='education' className='mini-icon'/>
                    {props.about.education.about}
                </span>
                <span>
                    <span>
                        <img src={props.about.college.img} alt="" id="college" className='mini-icon'/>
                        {props.about.college.about}
                    </span>
                    <span>
                        <img src={props.about.location.img} alt="" id="location" className='mini-icon'/>
                        {props.about.location.about}
                    </span>
                </span>
            </p>

        </div>
        </>
    )
}

export default Header;