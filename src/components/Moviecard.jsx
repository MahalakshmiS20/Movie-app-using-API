import React, { useContext } from 'react'
import{FaHeart,FaRegHeart} from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'


const Moviecard = ({movies}) => {
   const{toggleWatchlist,watchlist} =useContext(WatchListContext)
   console.log(watchlist)
   const isInWatchlist = watchlist.some((m) => m.id === movies.id);


  return (
    <div className='p-4 pt-26 bg-gray-800 text-white rounded-lg shadow-md relative'> 
        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title}  className='w-full h-80 object-contain rounded-sm'/>
        <h3 className='text-lg font-bold mt-4'>{movies.title}</h3>
        <p className='text-sm text-gray-500'>{movies.releasedate}</p>
        <button className='absolute top-2 right-2 text-red-500 ' onClick={()=>toggleWatchlist(movies)}>{isInWatchlist? <FaHeart />:<FaRegHeart />}</button>
    </div>
  )
}

export default Moviecard

 