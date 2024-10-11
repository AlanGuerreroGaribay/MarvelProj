import axios from "axios";
import md5 from "crypto-js/md5";

const publicKey = process.env.VITE_APP_PUBLIC_KEY || "";
const privateKey = process.env.VITE_APP_PRIVATE_KEY || "";
const baseURL = process.env.BASE_URL || "";

const timestamp = new Date().getTime();
const hash = md5(timestamp + privateKey + publicKey).toString();

export const getMarvelCharacters = async (currentPage: number) => {
  try {
    const response = await axios.get(`${baseURL}/characters`, {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
        limit: 20,
        offset: (currentPage - 1) * 20,
      },
    });

    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching characters", error);
  }  
};

export const getMarvelCharacterData = async (characterId: string) => {
  try {
    const response = await axios.get(
      `${baseURL}/characters/${characterId}?apikey=${publicKey}`,
      { params: { hash: hash, ts: timestamp } }
    );

    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching characters", error);
  }
};
