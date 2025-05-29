import {BrowserRouter,Routes,Route}from "react-router-dom"
import Home from "./pages/Home"
import WatchList from "./pages/Watchlist"
import Navbar from "./pages/Navbar"
import { WatchListProvider } from "./context/WatchlistContext"
//import './App.css'

function App() {
  
  return (
    <>
    <WatchListProvider>``
      <BrowserRouter>
       <Navbar/>  
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/watchlist" element={<WatchList/>}></Route>
        </Routes>
      </BrowserRouter>
    </WatchListProvider>
      
    </>
  )
}

export default App
