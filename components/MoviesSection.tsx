import React from "react";
import MovieCard, { Movie } from "./MovieCard";
import { getMovies } from "../utils/getMovies";
import { Stack } from "@mui/material";

const MoviesSection = async () => {
  const movies: Movie[] = await getMovies();

  return (
    <Stack direction={"row"} gap={10} flexWrap={"wrap"}>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie._id} />
      ))}
    </Stack>
  );
};

export default MoviesSection;
