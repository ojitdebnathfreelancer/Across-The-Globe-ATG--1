import React, { useEffect, useState } from 'react';
import './MainPostSection.css';
import Post from './Post/Post';
import { FaCaretDown, FaUsers, FaPen, FaEye } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillLike, AiTwotoneCalendar } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const MainPostSection = () => {

    const [posts, setPosts] = useState([]);
    const [write, setWrite] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div className='main-post-section mx-auto px-2'>
            <div className='col top-header d-flex justify-content-between'>
                <p className='min-btn1 d-lg-none'>Post(368)</p>
                <p className='min-btn2 d-lg-none'>Filter All: <FaCaretDown /></p>
                <ul className='list-unstyled d-none d-lg-flex'>
                    <li className='active'>All Post(32)</li>
                    <li>Artical</li>
                    <li>Event</li>
                    <li>Education</li>
                    <li>Job</li>
                </ul>
                <div className='post-btn d-none d-lg-block'>
                    <button className='btn-bg1'>Write a Post <FaCaretDown /></button>
                    <button className='btn-bg2'>Join Group <FaUsers /></button>
                </div>
            </div>
            <div className='col main-post'>
                <div className='row'>
                    <div className='col-lg-8 poster-left'>
                        {
                            posts.map(post => <Post key={post.id} post={post}></Post>)
                        }
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MainPostSection;