import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const hadleBackCliek = () => {
        navigate(-1)
    }
    
    console.log(post);
    const {id, title, body} = post;
    return (
        <div>
           <h1>{id} </h1>
           <p>{title}</p>
           <p>{body}</p>

           <button onClick={hadleBackCliek}> Go Back </button>
        </div>
    );
};

export default PostDetails;
