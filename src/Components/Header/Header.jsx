import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='flex gap-2'>
              <NavLink to ="/">Home</NavLink> 
              <NavLink to ="/about">about</NavLink>  
              <NavLink to ="/blog">Blog</NavLink>  
              <NavLink to ="user">User</NavLink>  
              <NavLink to ="user2">User2</NavLink>  



            </nav>
        </div>
    );
};

export default Header;