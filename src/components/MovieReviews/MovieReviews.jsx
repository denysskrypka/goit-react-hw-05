import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../../helpers/movies-api";
import { Puff } from "react-loader-spinner";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoad(true);
        setError(false);
        const { results } = await getReviewsById(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error && <p>Oops something went wrong please try reload the page</p>}
      {load && <Puff />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
}
