import React from 'react'
// import logo1 from '../assets/f-logo.png'

const Footer = () => {
    return (
        <div className='footer'>

           Copyright &copy; {new Date().getFullYear()} ReactApp |
            
            {""} All Rights Reserved | Powered By {""}
            <a
                href="https://www.google.com" target="_blank" rel="noopener noreferrer"
                style={{ cursor: "pointer" }} title="Visit The Site"
            >
                Lokinder007
            </a>
        </div>
    )
}

export default Footer