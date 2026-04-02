import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {

    const postDate = useLoaderData();
    console.log(postDate);
    return (
        <div>
            <h2>this is posts page</h2>
            <div className="flex flex-wrap">
                {
                    postDate.map(post => <Post post={post} key={post.id}></Post>)  
                }
            </div>
           
        </div>
    );
};

export default Posts;