import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();
    
    console.log(post);
    const {id, title, body} = post;
    return (
        <div>
           <h1>{id} </h1>
           <p>{title}</p>
           <p>{body}</p>
        </div>
    );
};

export default PostDetails;
