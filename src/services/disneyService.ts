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

  if (name) {
    if(name != " ") params.append("name", name);
    else params.append("name", '')
  }
  if (film) {
    if(film != " ") params.append("films", film);
    else params.append("films", '')
  }
  if (tvShow) {
    if(tvShow != " ") params.append("tvShows", tvShow);
    else params.append("tvShows", '')
  }
  if (shortFilm) {
    if(shortFilm != " ") params.append("shortFilms", shortFilm);
    else params.append("shortFilms", '')
  }
  if (parkAttraction) {
    if(parkAttraction != " ") params.append("parkAttractions", parkAttraction);
    else params.append("parkAttractions", '')
  }
  if (videoGame) {
    if(videoGame != " ") params.append("videoGames", videoGame);
    else params.append("videoGames", '')
  }

  const url = `${API_URL}?${params.toString()}`;
  console.log(url)
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