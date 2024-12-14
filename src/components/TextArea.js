import React, { useState, useRef } from "react";
import "./TextArea.css";
import { CiImageOn,CiLocationOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions,MdGif } from "react-icons/md";
import { IoIosOptions } from "react-icons/io";




const CoolTextArea = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    textAreaRef.current.style.height = "auto"; 
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set to the scroll height
  };

  return (
    <div className="text-area-container">
      <textarea
        ref={textAreaRef}
        className="cool-text-area"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleChange}
        rows="1" 
      ></textarea>
      <div className="character-counter">{text.length} characters</div>
      <div className="Icons">
        <button className='imgSelect'>
          <CiImageOn className="icon" style={{strokeWidth: 1}} />
        </button> 
        <button className='imgSelect'>
          <MdOutlineEmojiEmotions className="icon" style={{strokeWidth: 0}} />
        </button> 
        <button className='imgSelect'>
          <MdGif className="icon" style={{strokeWidth: 0}} />  
        </button> 
        <button className='imgSelect'>
          <CiLocationOn className="icon" style={{strokeWidth: 0.5}} />
        </button> 
        <button className='imgSelect'>
          <IoIosOptions className="icon" style={{strokeWidth: 0.5}} />
        </button> 
        <button className='post'>
          Post
        </button> 
        
      </div>
    </div>
  );
};

export default CoolTextArea;
