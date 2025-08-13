import React from "react";
import MovieCard, { Movie } from "./MovieCard";
import { getMovies } from "../utils/getMovies";

const MoviesSection = async () => {
  const movies: Movie[] = await getMovies();

  return (
    <section className="flex gap-8 justify-center items-end flex-wrap">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie._id} />
      ))}
    </section>
  );
};

export default MoviesSection;
