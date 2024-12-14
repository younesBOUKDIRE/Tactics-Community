import React from 'react';
import "./header.css";
import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import logo from '../logos/white.png';
import { Link } from 'react-router-dom';
import { FiMenu,FiX } from "react-icons/fi";
import { MdOndemandVideo,MdPolicy,MdLogout } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';
import { FiInfo } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import MainPage from '../MainPage/MainPage';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        if (isSideMenuOpen) {
            const sideMenu = document.querySelector('.sideMenu');
            sideMenu.classList.remove('show');
            sideMenu.classList.add('closeSideMenu');
            setTimeout(() => {
                setIsSideMenuOpen(false); 
            }, 500); 
        } else {
            setIsSideMenuOpen(true);
        }
    };
    
    const [notificationCount,setNotificationCount] = useState(1);
    const [messagesCount,setMessagesCount ]= useState(1);
    

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt='Logo' id="img1" />
                <span>Tactics Community</span>
            </div>
            <button onClick={toggleMenu} className="menu-toggle">
                ☰
            </button>
            <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
                <li>
                    <a href={MainPage} className="nav-link" onClick={(e) => {
                        
                        window.location.reload(); 
                    }}>
                        <FaHome className='icons' />
                    </a>
                </li>
                <li><Link className="nav-link"><FaRegUserCircle className='icons' /></Link></li>
                <li>
                    <Link  className="nav-link messages-container">
                        <AiFillMessage className='icons' />
                        {messagesCount > 0 && (
                            <span className="notification-badge">{messagesCount}</span>
                        )}
                    </Link>
                </li>
                <li>
                    <Link to="#contact" className="nav-link notification-container">
                        <IoNotifications className='icons' />
                        {notificationCount > 0 && (
                            <span className="notification-badge">{notificationCount}</span>
                        )}
                    </Link>
                </li>
                <li><button id='sidemenu' onClick={toggleSideMenu} className="nav-link"><FiMenu className='icons' /></button></li>
            </ul>
            <div className={`containerSide ${isSideMenuOpen? 'cont' : ''}`}>
                <div className={`sideMenuBlur ${isSideMenuOpen? 'blur' : ''}`}>

                </div>
                <div className={`sideMenu ${isSideMenuOpen ? 'show' : 'closeSideMenu'}`}>
                    <button onClick={toggleSideMenu} className="sideMenu-close">
                        <FiX />
                    </button>
                    <ul className='sideMenuList'>
                        <li className='logoPremium'>
                            <Link>
                                <img src={logo} alt='Logo' id="logoPremium" />
                                <span >Premium</span>
                            </Link>
                            
                        </li>
                        <li className='side'>
                            <Link>
                                <MdOndemandVideo className='iconSide'/>
                                <span >Tactics  Content</span>
                            </Link>
                            
                        </li>
                        <li className='side'>
                            <Link>
                                <FiInfo className="iconSide" />
                                <span >About</span>
                            </Link>
                            
                        </li>
                        <li className='side'>
                            <Link>
                                <MdPolicy className="iconSide" />  
                                <span >Policy</span>                  
                            </Link>
                            
                        </li>
                        <li className='side'>
                            <Link>
                                <TiMessages className='iconSide' />
                                <span >Contact Us</span>
                            </Link>
                            
                        </li>
                        <li className='side'>
                            <Link>
                                <IoSettingsSharp className='iconSide' />
                                <span >Settings and Privacy</span>
                            </Link>
                        </li>
                        <li className='side'>
                            <Link>
                                <MdLogout className='iconSide' />
                                <span >Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
