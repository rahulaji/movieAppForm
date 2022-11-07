import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails() {
  const { id } = useParams();
  //const movie=movieList[movieId]
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://632161f782f8687273b0b151.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  });
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const navigate = useNavigate();
  return <>
    <div>
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title="Ponniyin Selvan Teaser | #PS1 Tamil | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className='movie-details-container'>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}

          </h2>
          <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button startIcon={<KeyboardBackspaceIcon />} variant="contained" onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>

  </>;
}
