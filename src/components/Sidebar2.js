import React, { useState } from 'react'
import './Sidebar2.css'
import { IoMdSettings } from "react-icons/io";
import { FaHeart, FaRegHeart, FaShareAlt, FaCommentDots } from "react-icons/fa";
import Profile from "../logos/pic1.png";
import data from "../data/posts";
import CoolTextArea from './TextArea';


export default function Sidebar2() {
    const [likes, setLikes] = useState(data.map(() => 0)); 
    const [liked, setLiked] = useState(data.map(() => false));
    const [showShare, setShowShare] = useState(-1); 
    const [showComments, setShowComments] = useState(-1); 
    const [comments, setComments] = useState(data.map(() => []));
    const [newComment, setNewComment] = useState('');
    const[userName, setuserName] = useState('Younes BOUKDIRE');
    const toggleLike = (index) => {
        setLiked(prevLiked => {
          const updatedLiked = [...prevLiked];
          updatedLiked[index] = !updatedLiked[index];
          return updatedLiked;
        });
        setLikes(prevLikes => {
          const updatedLikes = [...prevLikes];
          updatedLikes[index] += liked[index] ? -1 : 1;
          return updatedLikes;
        });
    };
    
    const toggleSharePopup = (index) => {
        setShowShare(prevIndex => prevIndex === index ? -1 : index);
    };
    
    const toggleCommentsPopup = (index) => {
        setShowComments(prevIndex => prevIndex === index ? -1 : index);
    };
    
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };
    
    const addComment = (index) => {
        if (newComment.trim() !== '') {
          setComments(prevComments => {
            const updatedComments = [...prevComments];
            updatedComments[index] = [...updatedComments[index], newComment];
            return updatedComments;
          });
          setNewComment(''); 
        }
    };
  return (

    <div className="sideBar2">
            <div className="sideBarchild2">
              <div className="profile">
                <button className="profileredirect">
                  <img src={Profile} alt='profile' id="profile" />
                </button>
              </div>
             <CoolTextArea/>

            </div>
            
            <div className="posts">
              {data.map((item, index) => (
                <div key={index} className="post">
                  <div className="user-info">
                    <button className="userProfile">
                      <img src={item.imageUser} alt={item.nameUser} className="user-image" />
                      <h2>{item.nameUser}</h2>
                    </button>
                  </div>
                  <p>{item.text}</p>
                  <img src={item.imagePost} alt="Post content" className="post-image" />
                  <div className='reactions'>
                    <button className='like' onClick={() => toggleLike(index)}>
                      {liked[index] ? <FaHeart style={{ color: "#c23333" }} /> : <FaRegHeart />} {likes[index]}
                    </button>
                    <button className='comment' onClick={() => toggleCommentsPopup(index)}>
                      <FaCommentDots /> Comment
                    </button>
                    <button className='share' onClick={() => toggleSharePopup(index)}>
                      <FaShareAlt /> Share
                    </button>
                  </div>
                  {showShare === index && (
                    <div className="share-popup">
                      <p>Share this post on:</p>
                      <button>Facebook</button>
                      <button>Twitter</button>
                      <button>LinkedIn</button>
                    </div>
                  )}
                  {showComments === index && (
                    <div className="comments-popup">
                      <p>Comments Section</p>
                      {comments[index].map((comment, i) => (
                        <div key={i} className="comment-item">
                          <p><span><button className='userNameComments'>{userName}</button></span>{comment}</p>
                        </div>
                      ))}
                      <input
                        type="text"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                      />
                      <button className='addComment' onClick={() => addComment(index)}>Add Comment</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
  )
}
