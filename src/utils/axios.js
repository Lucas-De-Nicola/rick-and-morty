import axios from "axios";

export const getAllCharacters = async (state) => {
    const response = await axios.get("https://rickandmortyapi.com/api/character/");
    state(response.data.results);
}

export const getSingleCharacter = async (id, state) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    state(response.data);
} 
