import { MovieData } from "@/types";

export default async function fetchRamdomMovies(): Promise<MovieData[]> {
  let url = `http://localhost:12345/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
