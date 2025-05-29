import { Children, createContext, useState,useEffect } from "react";

export const WatchListContext = createContext();  

export const WatchListProvider=({children})=>{
    const [watchlist,setWatchlist] =useState([]);
    const [genrelist,setGenrelist] = useState([])

     useEffect(()=>{
         let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=8dfa8b95be1b02d139bf9c39707f5391`
          fetch(url)
          .then((response)=>response.json())
          .then((data)=>
            setGenrelist(data.genres || []))
       },[])

    const toggleWatchlist =(movie)=>{
        const index = watchlist.findIndex((m)=> m.id === movie.id);

        if(index=== -1){
            setWatchlist([...watchlist,movie])
        }
        else{
            setWatchlist([
            ...watchlist.slice(0,index),
            ...watchlist.slice(index+1)
        ])}

    }
 
    return(
        <WatchListContext.Provider value={{watchlist, toggleWatchlist,genrelist}}>
           {children}
        </WatchListContext.Provider>
    )
}    