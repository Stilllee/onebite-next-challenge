import { MovieData } from "@/types";

export default async function fetchRamdomMovies(): Promise<MovieData[]> {
  let url = `https://onebite-cinema-server.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
