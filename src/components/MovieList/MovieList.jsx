import { Link, useLocation } from "react-router-dom";

export default function MovieList({ moviesList }) {
  const location = useLocation();
  return (
    <ul>
      {moviesList.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
