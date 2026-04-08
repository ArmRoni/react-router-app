import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);

    const params = useParams();
    console.log(params)

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