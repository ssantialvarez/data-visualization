import axios from "axios";

const API_URL = "https://api.disneyapi.dev/character";

export const getDisneyCharacters = async ({ pageParam = 1 }) => {
  try {
    const response = await axios.get(`${API_URL}?page=${pageParam}`);
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