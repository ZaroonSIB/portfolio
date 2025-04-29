import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="header py-2 w-full z-2 fixed top-0 left-0 border-b-1 border-gray-600">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-4">
                <div>
                <Link className="flex items-center gap-4" to="/">
                    <img src={logo} alt="Logo" className="w-[70px]" />
                    <h3 className="text-5xl text-gray-100 font-bold">Mohd Junaid</h3>
                </Link>
                </div>
                <div className="centerMenu">
                    <ul className="flex gap-4">
                        <li><Link className="text-white font-medium px-2 hover:text-lime-300 tracking-[1px]" to="/">Home</Link></li>
                        <li><Link className="text-white font-medium px-2 tracking-[1px]" to="/">About Me</Link></li>
                        <li><Link className="text-white font-medium px-2 tracking-[1px]" to="/">Skills</Link></li>
                        <li><Link className="text-white font-medium px-2 tracking-[1px]" to="/">Portfolio</Link></li>
                        <li><Link className="text-white font-medium px-2 tracking-[1px]" to="/">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="socialIcons flex gap-4 text-[18px]">
                    <Link to="#"><FontAwesomeIcon icon={['fab', 'facebook-f']}  className="text-white hover:text-lime-300" /></Link>
                    <Link to="#"><FontAwesomeIcon icon={['fab', 'instagram']} className="text-white hover:text-lime-300" /></Link>
                    <Link to="#"><FontAwesomeIcon icon={['fab', 'x-twitter']}  className="text-white hover:text-lime-300" /></Link>
                    <Link to="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="text-white hover:text-lime-300" /></Link>
                    <Link to="#"><FontAwesomeIcon icon={['fab', 'github']}  className="text-white hover:text-lime-300" /></Link>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header
