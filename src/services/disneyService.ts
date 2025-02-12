import axios from "axios";

const API_URL = "https://api.disneyapi.dev/character";

export const getDisneyCharacters = async ({ pageParam = 1, name, film, tvShow, shortFilm, parkAttraction, videoGame }: { 
  pageParam: number, 
  name?: string, 
  film?: string, 
  tvShow?: string, 
  shortFilm?: string,
  parkAttraction?: string, 
  videoGame?: string  
}) => {
  let url = `${API_URL}?page=${pageParam}&pageSize=48`
  name = name ? `&name=${name}` : ''
  film = film ? `&films=${film}` : ''
  tvShow = tvShow ? `&tvShows=${tvShow}` : ''
  shortFilm = shortFilm ? `&shortFilms=${shortFilm}` : ''
  parkAttraction = parkAttraction ? `&parkAttractions=${parkAttraction}` : ''
  videoGame = videoGame ? `&videoGames=${videoGame}` : ''

  url = url + name + film + tvShow + shortFilm + parkAttraction + videoGame
  
  console.log(url)
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching Disney characters:", error);
    return { data: [], info: {} };
  }
};


export const getFilteredDisneyCharacters = async ({ name } : { name: string }) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
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