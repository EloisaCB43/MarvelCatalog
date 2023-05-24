"use client";

import Card from "./components/Card";
import MovieProgress from "./components/MovieProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MovieProgress />
      <Card name="NAME" comics={25} movies={25} />
    </main>
  );
}
