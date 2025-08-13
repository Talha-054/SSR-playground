import { getDb } from "../config/db";

export const getMovies = async () => {
  const db = await getDb();
  const movies = await db.collection("movies").find({}).limit(10).toArray();
  return movies.map((m) => ({
    _id: m._id.toString(),
    title: m.title,
    plot: m.plot,
    year: m.year,
  }));
};
