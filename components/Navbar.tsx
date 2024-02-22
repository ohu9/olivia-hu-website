import React from 'react';

const tabs = ['olivia hu', 'about', 'projects', 'experience', 'contact', 'resume'];
const buttons = tabs.map(tab => <button className='nav-btn'>{tab}</button>);

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <a href="#top"><img src={logo} className='logo'/></a> */}
            <a href="#top" className='home-btn'>{buttons[0]}</a>
            <div className="buttons">
                <a href="#section-about">{buttons[1]}</a>
                <a href="#section-projects">{buttons[2]}</a>
                {/* <a href="#section-experience">{buttons[3]}</a> */}
                <a href="#section-contact" >{buttons[4]}</a>
                <a href="https://drive.google.com/file/d/1bNhmnoFNlzsFNvxx0OTKhnY_nhL20t4z/view?usp=sharing" target="_blank" className='right-btn'>{buttons[5]}</a>
            </div>
        </div>
    );
}

export default Navbar