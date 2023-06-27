import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className='rounded  bg-fuchsia-600 h-14 flex justify-around items-center'>
               <Link to='/'> <h1 className='mr-6 font-bold uppercase  text-xl'>Tech-Blog</h1></Link>
                <ul className='flex items-center gap-8 text-white font-medium'>
                   <Link to='/'><li>Home</li></Link>
                   <Link to='/readingHistory'>Reading History</Link>
                    <Link to='/dashboard'><li>Dashboard</li>
                    </Link>                         
                     <li>About Us</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;