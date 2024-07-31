import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../helpers/movies-api";
import toast, { Toaster } from "react-hot-toast";
import { Puff } from "react-loader-spinner";
import { Field, Form, Formik } from "formik";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoad(true);
        const { results } = await getMoviesByQuery(query);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoad(false);
      }
    };
    fetchMovies();
  }, [query, searchParams]);

  const handleSubmit = (values, actions) => {
    values.search !== ""
      ? searchParams.set("query", values.search)
      : toast.error("Please enter query", { position: "top-center" });
    setSearchParams(searchParams);
    actions.resetForm();
  };

  return (
    <div>
      {error && <p>Oops something went wrong please try reload the page</p>}
      {load && <Puff />}
      <Formik initialValues={{ search: query }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="search"
          />
          <button type="submit">Search</button>
          <Toaster />
        </Form>
      </Formik>
      <MovieList moviesList={movies} />
    </div>
  );
}
