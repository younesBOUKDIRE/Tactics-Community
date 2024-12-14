import React , { useState } from 'react';
import './Sidebar1.css'
import Profile from "../logos/pic1.png";
import { Link } from 'react-router-dom';
import { FaUserFriends,FaHistory,FaBookmark,FaFlag } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiFilmReelFill,PiStrategy } from "react-icons/pi";
import { IoIosFootball,IoMdPeople  } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";



export default function Sidebar1() {
  const [profileImg,setProfileImg] = useState(Profile) 
  const [profileName,setProfileName] = useState("Younes Boukdire")
  const items = [
    { id: 1, name: "Friends", icon: <FaUserFriends /> },
    { id: 2, name: "Archive", icon: <FaHistory /> },
    { id: 3, name: "Bookmarks", icon: <FaBookmark /> },
    { id: 4, name: "Videos", icon: <MdOutlineSlowMotionVideo /> },
    { id: 5, name: "Reels", icon: <PiFilmReelFill /> },
    { id: 6, name: "Matches", icon: <IoIosFootball /> },
    { id: 7, name: "Tactics", icon: <PiStrategy /> },
    { id: 8, name: "Pages", icon: <FaFlag /> },
    { id: 9, name: "Coaches", icon: <GrUserManager /> },
    { id: 10, name: "Groupes", icon: <IoMdPeople /> }
  ]
  return (
    <div className="sideBar1">
        <div className='profileSideBar1'>
          <Link>
            <img src={profileImg} alt="profileimg" id='profileimg'/>
            <h2>{profileName}</h2>
          </Link>
        </div>
        <div className='hr'>
          {items.map((e)=>{
            return (
              <div key={e.id} className='SideMenu1Item'>
                <Link>
                  <div className='iconDiv'>{e.icon}</div>
                  <h2>{e.name}</h2>
                </Link>
              </div>
            )
          })}
        </div>
        
        
    </div>
  )
}
