import axios from "axios";

const API_URL = "https://api.disneyapi.dev/character";

export const getDisneyCharacters = async ({
  pageParam = 1,
  name,
  film,
  tvShow,
  shortFilm,
  parkAttraction,
  videoGame,
}: {
  pageParam: number;
  name?: string;
  film?: string;
  tvShow?: string;
  shortFilm?: string;
  parkAttraction?: string;
  videoGame?: string;
}) => {
  const params = new URLSearchParams({
    page: pageParam.toString(),
    pageSize: "48",
  });

  if (name) params.append("name", name);
  if (film) params.append("films", film);
  if (tvShow) params.append("tvShows", tvShow);
  if (shortFilm) params.append("shortFilms", shortFilm);
  if (parkAttraction) params.append("parkAttractions", parkAttraction);
  if (videoGame) params.append("videoGames", videoGame);

  const url = `${API_URL}?${params.toString()}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Disney characters:", error);
    return { data: [], info: {} };
  }
};

export const getDisneyCharacterById = async (charId: string) => {
  try {
    const response = await axios.get(`${API_URL}/${charId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Disney characters:", error);
    return { data: [], info: {} };
  }
};