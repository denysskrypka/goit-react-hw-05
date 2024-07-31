import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../helpers/movies-api";
import { Puff } from "react-loader-spinner";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseYear, setReleaseYear] = useState("");
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");
  const { poster_path, title, overview, vote_average } = movies;

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setError(false);
        setLoad(true);
        const data = await getMovieById(movieId);
        setMovies(data);
        setGenres(data.genres);
        setReleaseYear(data.release_date.slice(0, 4));
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      {load && <Puff />}
      {error && <p>Oops something went wrong please try reload the page</p>}
      <Link to={backLink.current}>Go back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      </div>
      <div>
        <h2>{`${title} (${releaseYear})`}</h2>
        <span>User score: {`${Math.round(vote_average * 10)}%`}</span>
        <h3>Overview:</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        {genres.map((genre) => (
          <div key={genre.id}>
            <span>{genre.name}</span>
          </div>
        ))}
      </div>
      <ul>
        <li>
          <Link to={"reviews"}>Reviews</Link>
        </li>
        <li>
          <Link to={"cast"}>Cast</Link>
        </li>
      </ul>

      <Suspense fallback={<Puff />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
