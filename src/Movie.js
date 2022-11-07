import { useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import {useNavigate} from "react-router-dom"

export function Movie({ movie,id,deleteButton,editButton}) {
  const navigate=useNavigate();
  const [show, setShow] = useState(0);
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  return <>
    <Card className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)} aria-label="Toggle summary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
               color="primary"
               onClick={() => navigate(`/movies/${id}`)}
               aria-label="movie details">
              <InfoIcon/>
            </IconButton>
          </h2>
          <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} { editButton}
      </CardActions>
    </Card>
  </>;
}
