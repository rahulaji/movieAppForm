import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

export function Addmovie({ movieList, setMovieList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return <>
    <div className='app'>
      <TextField id="outlined-basic" label="Name" onChange={(e) => setName(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Poster" onChange={(e) => setPoster(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Rating" onChange={(e) => setRating(e.target.value)} variant="outlined" />
      <TextField id="outlined-basic" label="Summary" onChange={(e) => setSummary(e.target.value)} variant="outlined" />
      <Button startIcon={<AddIcon/>} onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary
        }; setMovieList([...movieList, newMovie]);
      }} variant="contained">Add movie</Button>
    </div>
  </>;
}
