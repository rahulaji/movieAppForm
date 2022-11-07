import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export function Addmovie({ movieList, setMovieList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate= useNavigate();
  const Addmovie=()=>{
    const newMovie = {
    name: name,
    poster: poster,
    rating: rating,
    summary: summary,
    trailer: trailer
  };
  fetch(`https://632161f782f8687273b0b151.mockapi.io/movies/`,{
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
      "Content-Type":"application/json",
    },
  })
  .then((data) => data.json())
  .then((mv) => navigate("/movies"));
};
  return <>
    <div className='app'>
      <TextField id="outlined-basic" label="Name" onChange={(e) => setName(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Poster" onChange={(e) => setPoster(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Rating" onChange={(e) => setRating(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Summary" onChange={(e) => setSummary(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Trailer" onChange={(e) => setTrailer(e.target.value)} variant="outlined" />
      <Button startIcon={<AddIcon/>} onClick={Addmovie} variant="contained">Add movie</Button>
    </div>
  </>;
}
