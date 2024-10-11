import { useEffect, useState } from "react";
import { getMarvelCharacters } from "../api/marvelAPI";
import { CharacterType } from "../types/character.type";

export const useFetchMarvelCharacters = (currentPage: number) => {
  const [data, setData] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    //Bring data from the storage
    const cachedData = JSON.parse(
      localStorage.getItem("AllCharactersData") || "{}"
    );

    //If there is data in the storage already, i set it on the state
    if (cachedData[currentPage]) {
      setData(cachedData[currentPage]);
      setLoading(false);
      return;
    }

    //if there is no data in the storage ill make the get request
    const newData = await getMarvelCharacters(currentPage);

    //set de data in the state
    setData(newData);

    //i make a new object with the fetched data
    cachedData[currentPage] = newData;

    //I update the data in the storage with my new object
    localStorage.setItem("AllCharactersData", JSON.stringify(cachedData));
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return { data, loading };
};
