import * as React from "react";
import Image from "next/image";
import { Card, CardMedia, CardContent, Typography, Box, Chip, Stack } from "@mui/material";

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
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {movie.poster && (
        <CardMedia>
          <Box sx={{ position: "relative", width: "100%", height: 200 }}>
            <Image
              src={movie.poster}
              alt={movie.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </CardMedia>
      )}

      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {movie.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {movie.plot?.length > 120
            ? movie.plot.slice(0, 120) + "..."
            : movie.plot}
        </Typography>

        {movie.genres && (
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 1 }}>
            {movie.genres.map((genre) => (
              <Chip key={genre} label={genre} size="small" color="primary" />
            ))}
          </Stack>
        )}

        <Stack direction="row" spacing={2}>
          <Typography variant="body2">⭐ {movie.imdb?.rating ?? "N/A"}</Typography>
          <Typography variant="body2">📅 {movie.year ?? "Unknown"}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
