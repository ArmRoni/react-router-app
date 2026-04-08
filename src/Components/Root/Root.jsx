import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';

const Root = () => {
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            {isNavigation && <span> loading ......</span>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;