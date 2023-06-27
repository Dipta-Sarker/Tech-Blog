import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation()
    useEffect(()=>{
        
    },[location])
    return (
        <div className='bg-slate-300 h-screen col-span-2 p-5 rounded-lg relative'>
            <h1>Admin Dashboard</h1>
            <Link to='' className={`${location.pathname === '/dashboard' ? 'text-white font-bold' : null}`}>Product List</Link>
            <p><Link to='/dashboard/addProduct' className={`${location.pathname === '/dashboard/addProduct' ? 'text-white font-bold' : null}`}>Add Product</Link></p>
            
            <p className='absolute bottom-0 mb-10 underline'><Link to='/'>Home</Link></p>
            
        </div>
    );
};

export default Sidebar;