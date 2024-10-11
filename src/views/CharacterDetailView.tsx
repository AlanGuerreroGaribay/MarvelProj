import {
  CharacterDetailBody,
  CharacterDetailContainer,
  CharacterDetailHeader,
  CharacterDetailImage,
  CharacterDetailText,
} from "@/components/CharacterDetail/CharacterDetail";
import { Loading } from "@/components/Loading/Loading";
import { useFetchCharacterdata } from "@/helpers/hooks/useFetchCharacterData";
import { useParams } from "react-router-dom";

const CharacterDetailView = () => {
  const params = useParams();
  const { data, loading } = useFetchCharacterdata(params.characterId || "");

  const characterThumbnail =
    data[0]?.thumbnail?.path + "." + data[0]?.thumbnail?.extension;

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <CharacterDetailContainer>
          <CharacterDetailHeader characterName={data[0]?.name} />
          <CharacterDetailBody>
            <CharacterDetailImage characterThumbnail={characterThumbnail} />
            <CharacterDetailText text={data[0]?.description} />
          </CharacterDetailBody>
        </CharacterDetailContainer>
      )}
    </>
  );
};

export default CharacterDetailView;
