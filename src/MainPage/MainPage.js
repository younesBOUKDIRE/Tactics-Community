import React from 'react';
import Header from '../components/header';
import "./MainPage.css";

import Sidebar1 from '../components/Sidebar1';
import Sidebar2 from '../components/Sidebar2';
import Sidebar3 from '../components/Sidebar3';


export default function MainPage() {

  return (
    <>
      <Header/>
      <div className="main-page">
        <div className="main-page_container">
          <Sidebar1/>
          <Sidebar2/>
          <Sidebar3/>
        </div>
      </div>
    </>
  );
}
