
export const getMovies = async () => {
  const res = await fetch("/api/movies", {
    method: "GET",
  });
  const data = await res.json()
  return data
};
