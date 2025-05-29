import React, { useState,useEffect } from 'react'
import Moviecard from '../components/Moviecard'


const Home = () => {
   const [movies,setMovies] =useState([])
   const [page,setPage] =useState(1)
   const [search,setSearch] =useState()

   useEffect(()=>{
     let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=8dfa8b95be1b02d139bf9c39707f5391`
     if(search){
        url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=8dfa8b95be1b02d139bf9c39707f5391`
     }
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>
        setMovies(data.results)
        )
   },[page,search])
  return (
    <div>
    <div className='p-4 pt-16'>
        <input type="text" 
        className='p-2 border border-gray-700  rounded text-white bg-gray-900 bg-opacity-50 backdrop:blur-md  text-center  w-3/4 md:w-1/2 fixed top-18 left-1/2 transform -translate-x-1/2' 
        placeholder='Search movies..'
        onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div className="moviecard-container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 px-4">
           {movies.map((movie,idx)=>{
                return <Moviecard key={idx} movies={movie}/>
           })}
    </div>
    <div className="pagenavigation-container mt-3 flex justify-between px-4">
            <button className='bg-gray-700 rounded text-white p-2' disabled={page==1} onClick={()=>setPage((prev)=>prev-1)}>PREV</button>
            <button className='bg-gray-700 rounded text-white p-2' onClick={()=>setPage((prev)=>prev+1)}>NEXT</button>
    </div>
    </div>
  )
}

export default Home