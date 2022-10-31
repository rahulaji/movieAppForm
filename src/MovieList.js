import { Movie } from "./Movie";

export function MovieList({ movieList }) {

  return <>
    <div className='movie-list-container'>
      {movieList.map((mv, index) => (
        <Movie key={mv.id} movie={mv} id={mv.id} />
      ))}
    </div>
  </>;
}
