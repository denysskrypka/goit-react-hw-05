import axios from "axios";

export const getTrendingMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=ISO-639-1'",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNkNjMxMDI1NWNhYWY0NjY5OTZjNTI5Yzk0NWYzZCIsIm5iZiI6MTcyMjQzMTM5MS4xNDAyMzQsInN1YiI6IjY2YWEzM2Y0YzU1ZjI2N2EyMzE5NDU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sinG2XOvIRsLLKCXW1lYKpH9s1dMb4HcpTLVHnj-91Q",
      },
    }
  );
  return res.data;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNkNjMxMDI1NWNhYWY0NjY5OTZjNTI5Yzk0NWYzZCIsIm5iZiI6MTcyMjQzMTM5MS4xNDAyMzQsInN1YiI6IjY2YWEzM2Y0YzU1ZjI2N2EyMzE5NDU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sinG2XOvIRsLLKCXW1lYKpH9s1dMb4HcpTLVHnj-91Q",
      },
    }
  );
  return data;
};

export const getReviewsById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNkNjMxMDI1NWNhYWY0NjY5OTZjNTI5Yzk0NWYzZCIsIm5iZiI6MTcyMjQzMTM5MS4xNDAyMzQsInN1YiI6IjY2YWEzM2Y0YzU1ZjI2N2EyMzE5NDU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sinG2XOvIRsLLKCXW1lYKpH9s1dMb4HcpTLVHnj-91Q",
      },
    }
  );
  return data;
};

export const getCastById = async (movieId) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNkNjMxMDI1NWNhYWY0NjY5OTZjNTI5Yzk0NWYzZCIsIm5iZiI6MTcyMjQzMTM5MS4xNDAyMzQsInN1YiI6IjY2YWEzM2Y0YzU1ZjI2N2EyMzE5NDU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sinG2XOvIRsLLKCXW1lYKpH9s1dMb4HcpTLVHnj-91Q",
      },
    }
  );
  return data;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDNkNjMxMDI1NWNhYWY0NjY5OTZjNTI5Yzk0NWYzZCIsIm5iZiI6MTcyMjQzMTM5MS4xNDAyMzQsInN1YiI6IjY2YWEzM2Y0YzU1ZjI2N2EyMzE5NDU5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sinG2XOvIRsLLKCXW1lYKpH9s1dMb4HcpTLVHnj-91Q",
      },
    }
  );
  return data;
};
