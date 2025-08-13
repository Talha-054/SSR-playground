import Image from "next/image";

export interface Movie {
  _id: string;
  title: string;
  plot: string;
  poster?: string;
  genres?: string[];
  imdb?: { rating?: number };
  year?: number;
}

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-[--var(foreground)] rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      {movie.poster && (
        <Image
          src={movie.poster}
          width={200}
          height={200}
          alt={movie.title}
          className="h-80 w-full object-cover"
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-600 text-sm flex-1">
          {movie.plot?.length > 120
            ? movie?.plot.slice(0, 120) + "..."
            : movie.plot}
        </p>
        {movie.genres && (
          <div className="flex flex-wrap gap-1 mt-3">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="bg-[--var(foreground)]  text-white px-2 py-0.5 text-xs rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        )}
        <div className="mt-3 text-sm text-gray-500 flex justify-between">
          <span>⭐ {movie.imdb?.rating ?? "N/A"}</span>
          <span>📅 {movie.year ?? "Unknown"}</span>
        </div>
      </div>
    </div>
  );
}
