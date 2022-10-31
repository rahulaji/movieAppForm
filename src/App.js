import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route,Navigate,useParams,useNavigate } from "react-router-dom";
import { MovieList } from './MovieList';
import { Home } from './Home';
import { Addmovie } from './Addmovie';
import { NotFound } from './NotFound';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function App() {
  const [mode,setMode]=useState("dark")
  const navigate=useNavigate();
  const [movieList,setMovieList]=useState([]);
 const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
useEffect(()=>{
  fetch("https://632161f782f8687273b0b151.mockapi.io/movies")
.then((data)=>data.json())
.then((mvs)=>setMovieList(mvs))
},[]);

  return <>
      <ThemeProvider theme={darkTheme}>
      <Paper sx={{minHeight:"100vh"}} elevation={4}>
     <div className="App">
    <AppBar position="static">
          <Toolbar>
              <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
              <Button color="inherit" onClick={()=>navigate('/movies')}>Movies</Button>
              <Button color="inherit" onClick={()=>navigate('/movies-add')}>Add-Movies</Button>
              <Button startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} sx={{marginLeft:"auto"}} color="inherit" onClick={()=>setMode(mode==="light"?"dark":"light")}>
                {mode==="light"?"dark":"light"}mode</Button>
          </Toolbar>
      </AppBar>
     
   <section className='section-container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flims" element={<Navigate replace to ="/movies"/>} />
          <Route path="/movies" element={<MovieList movieList={movieList}/>} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
          <Route path="/movies-add" element={<Addmovie movieList={movieList} setMovieList={setMovieList}/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
    </div>
     </Paper>
    </ThemeProvider>
  </>
}
function MovieDetails(){
  const {id}=useParams();
  //const movie=movieList[movieId]
  const [movie,setMovie]=useState({});
  useEffect(()=>{
    fetch(`https://632161f782f8687273b0b151.mockapi.io/movies/${id}`)
  .then((data)=>data.json())
  .then((mv)=>setMovie(mv))
  });
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const navigate=useNavigate()
  return<> 
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
           <Button  startIcon={<KeyboardBackspaceIcon/>} variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
        </div>
        
  </>
}
export default App;


