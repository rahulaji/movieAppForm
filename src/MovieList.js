import { Movie } from "./Movie";
import {useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export function MovieList() {
  const [movies,setMovies]=useState([]);
  const getMovies=()=>{
    fetch("https://632161f782f8687273b0b151.mockapi.io/movies",{method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs))
  }

  useEffect(()=>{getMovies()},[]);
  const deleteMovie=(id)=>{
    fetch(`https://632161f782f8687273b0b151.mockapi.io/movies/${id}`,{method:"DELETE"})
    .then((data)=>data.json())
    .then(()=>getMovies());
  }
  const navigate= useNavigate();
  return <>
    <div className='movie-list-container'>
      {movies.map((mv, index) => (
        <Movie 
          key={mv.id} 
          movie={mv} 
          id={mv.id} 
        deleteButton={
        <IconButton
            color="error" 
            onClick={()=>deleteMovie(mv.id)} 
            aria-label='delete'>
             <DeleteIcon/>
        </IconButton>
       }
       editButton={
        <IconButton 
           onClick={()=>navigate(`/movies/edit/${mv.id}`)} 
          aria-label='delete'>
          <EditIcon/>
        </IconButton>
       }/>
        ))}
    </div>
  </>
}
