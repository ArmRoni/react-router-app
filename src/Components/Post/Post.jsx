import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const{id, title, body } = post
    return (
        <div className=' max-w-3xs  border-2 border-amber-300 p-3 m-3'>
           <p>In:{id}</p>
           <p>{title}</p>
           <p>{body}</p>
           <Link to={`/post/${id}`} className='border-amber-400 border-2 rounded-2xl p-2 block mt-3 text-center'> show details </Link>
        </div>
    );
};

export default Post;