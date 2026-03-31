import React from 'react';
import { useLoaderData } from 'react-router';
import Use from '../Use/Use';

const User = () => {

    const userdate = useLoaderData();
    console.log(userdate);
    return (
        <div>
            {
                userdate.map(use => <Use key={use.id} use ={use}></Use>)
            }

            <h2> this is User page</h2>
        </div>
    );
};

export default User;