import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, website} = user;
    return (
        <div>
            <h2>User Details here</h2>
            <p>Name:{name}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;