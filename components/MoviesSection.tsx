"use client"
import React, { useEffect, useState } from "react";
import MovieCard, { Movie } from "./MovieCard";
import { getMovies } from "../utils/getMovies";

const MoviesSection = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(()=>{
        getMovies().then((res)=>{
            setMovies(res)
        })
    }, [])
  return (
    <section className="flex gap-8 justify-center items-end flex-wrap">
        {movies.map((movie)=><MovieCard movie={movie} key={movie._id}/>)}
    </section>
  );
};

export default MoviesSection;
