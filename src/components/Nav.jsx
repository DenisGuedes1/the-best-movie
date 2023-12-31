import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "./NavBarGrid.css";

export const Navbar = ()=>{
  const [search, setSearch] =useState ("");
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

    return(
        <nav id="navBar">
          <h2>
            <Link to="/"> 
               <BiCameraMovie/> TheBestMovie
            </Link>
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Econtre o Seu filme Favorito' 
              onChange={(e)=> setSearch(e.target.value)} value={search}/>
            <button type="submit">
                <BiSearchAlt2/>
            </button>
          </form>
        </nav>
    )
}
