export const getMovies = async () => {
  const clientUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.CLIENT_URL;
  const res = await fetch(`${clientUrl}/api/movies`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
