import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-12 p-3 gap-3'>
            <Sidebar></Sidebar>
            <div className='col-span-10  bg-gray-100 rounded-lg'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;