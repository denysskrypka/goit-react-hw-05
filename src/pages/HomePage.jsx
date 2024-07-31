import { useEffect, useState } from "react";
import { getTrendingMovies } from "../helpers/movies-api";
import { Puff } from "react-loader-spinner";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setError(false);
        setLoad(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {load && <Puff />}
      {error && <p>Oops something went wrong please try reload the page</p>}
      {movies.length > 0 && <MovieList moviesList={movies} />}
    </div>
  );
}
