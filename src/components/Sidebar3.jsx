import React, {useState,useEffect } from 'react'
import './Sidebar3.css'
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import guardiola from '../logos/guardiola.jpg'

export default function Sidebar3() {
  const [trending,setTrending] = useState([])
  useEffect(() => {
    const trends = ['Guardiola_Tactics', 'Tactics_League', 'Arteta_Strategies', 'Xabi_Alonso Tips', 'Gaming', 'News',"bashar"]
    setTrending(trends)
  },[])
  return (
    <div className="sideBar3">
        <SearchInput/>
        <div className='trend'>
            <h2>Trending</h2>
            <ul>
                {trending.map((t,i) => <li key={i}><Link >#{t}</Link></li>)}
            </ul>
        </div>
        
    </div>
  )
}
