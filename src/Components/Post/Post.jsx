import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const{id, title, body } = post;

    const navigate = useNavigate();

    const handleNavtigate = () => {
    //======== home page jawar jonno ===============
        // navigate('/')
        navigate(`/post/${id}`)
    }

    return (
        <div className=' max-w-3xs  border-2 border-amber-300 p-3 m-3'>
           <p>In:{id}</p>
           <p>{title}</p>
           <p>{body}</p>
           <Link to={`/post/${id}`} className='border-amber-400 border-2 rounded-2xl p-2 block mt-3 text-center'> <button>show details </button> </Link>
           <button onClick={handleNavtigate} className='border-amber-400 border-2 rounded-2xl p-2 block mt-3 text-center'> Details of :{id}</button>

        </div>
    );
};

export default Post;