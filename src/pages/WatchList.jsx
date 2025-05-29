import React, { useContext, useState } from 'react'
import Genrefilter from '../components/Genrefilter'
import { WatchListContext } from '../context/WatchlistContext'
import Moviecard from '../components/Moviecard'

const WatchList = () => {
    const {watchlist,genrelist} = useContext(WatchListContext)
    const [search,setSearch] = useState("")
    const [selectedgenre,setSelectedgenre] = useState("")
    const filteredMovies = watchlist.filter((movies)=>
           movies.title.toLowerCase().includes(search.toLowerCase())
    ).filter((movies)=>{
        return !selectedgenre || movies.genre_ids.includes(Number(selectedgenre))
    })
    return (
        <div className='p-4 mt-16'>
            <input type="text"
                className='p-2 border border-gray-900  rounded text-white bg-gray-900 bg-opacity-50 backdrop:blur-md  text-center  w-3/4 md:w-1/2 fixed top-18 left-1/2 transform -translate-x-1/2'
                placeholder='Search movies..'
                onChange={(e)=>setSearch(e.target.value)} />
            <div className='mt-20 flex justify-center'>
                <Genrefilter genrelist={genrelist} setSelectedgenre={setSelectedgenre} />
            </div>
            <div className="moviecard-container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 px-4">
              {filteredMovies.map((movie,idx)=>{
                return <Moviecard key={idx} movies={movie}/>
              })}
            </div>
        </div>
    )
}

export default WatchList
