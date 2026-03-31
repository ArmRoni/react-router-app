import React, { use } from 'react';

const User2 = ({useProms}) => {
    const userdate = use(useProms);
    console.log(userdate)
    return (
        <div>
            <h2>user 2</h2>
        </div>
    );
};

export default User2;