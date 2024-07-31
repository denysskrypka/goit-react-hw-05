import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "../../helpers/movies-api";
import { Puff } from "react-loader-spinner";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setError(false);
        setLoad(true);
        const { cast } = await getCastById(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {error && <p>Oops something went wrong please try reload the page</p>}
      {load && <Puff />}
      {cast.length > 0 && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
