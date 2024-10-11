import { useEffect, useState } from "react";
import { getMarvelCharacterData } from "../api/marvelAPI";
import { CharacterType } from "../types/character.type";

export const useFetchCharacterdata = (id: string) => {
  const [data, setData] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    //Bring data from the storage
    const cachedData = JSON.parse(
      localStorage.getItem("CharacterData") || "{}"
    );

    //If there is data in the storage already, i set it on the state
    if (cachedData[id]) {
      setData(cachedData[id]);
      setLoading(false);
      return;
    }

    //if there is no data in the storage i make the get request
    const newCharacterData = await getMarvelCharacterData(id);

    //set de data in the state
    setData(newCharacterData);

    //i make a new object with the fetched data
    cachedData[id] = newCharacterData;

    //I update the data in the storage with my new object
    localStorage.setItem("CharacterData", JSON.stringify(cachedData));
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { data, loading };
};
