import { ListContainer, ListCharacterItem } from "@/components/List/List";
import { Loading } from "@/components/Loading/Loading";
import { useCurrentPage } from "@/helpers/hooks/useCurrentPage";
import { useFetchMarvelCharacters } from "@/helpers/hooks/useFetchMarvelCharacters";
import { useParams } from "react-router-dom";

const ListView = () => {
  const params = useParams();
  const page = useCurrentPage(params.page || "");
  const { data, loading } = useFetchMarvelCharacters(page);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <ListContainer>
          {data.map((character) => {
            return (
              <ListCharacterItem
                id={character.id}
                key={character.id}
                name={character.name}
                thumbnail={character.thumbnail.path}
                extension={character.thumbnail.extension}
              />
            );
          })}
        </ListContainer>
      )}
    </>
  );
};

export default ListView;
