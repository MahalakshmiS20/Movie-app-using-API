import React, { useContext } from 'react'
import{Link} from "react-router-dom";
import Watchlist from './WatchList';
import { WatchListContext } from '../context/WatchListContext';

const Navbar = () => {
   const {watchlist} = useContext(WatchListContext)
  return (
    <nav className='bg-gray-900 text-white p-4 flex justify-between fixed top-0 w-full z-10'>
       <Link to="/" className='font-bold '>Movie App</Link>
       <Link to="/Watchlist" className='text-xl'>Watch list ({watchlist.length})</Link>
    </nav>
   
  )
};

export default Navbar