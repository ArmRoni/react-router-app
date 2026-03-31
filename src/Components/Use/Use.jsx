import React from 'react';
import { Link } from 'react-router';

const Use = ({use}) => {
    const {id, name, email, phone}=use;
    return (
        <div className='border-2 p-3 m-3 rounded-2xl '>
           <h3 className='text-3xl'>{name}</h3>
           <p>Email:{email}</p>
           <p><small className='block mb-3'>{phone}</small></p>
           <Link to={`/user/${id}`} className= ' border-2 p-2 rounded-2xl  border-amber-200'> See Detials</Link>

        </div>
    );
};

export default Use;