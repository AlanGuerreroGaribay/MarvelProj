import {
  ListComicItem,
  ListComicsTitle,
  ListContainer,
} from "@/components/List/List";
import { Loading } from "@/components/Loading/Loading";
import { useFetchCharacterdata } from "@/helpers/hooks/useFetchCharacterData";
import { ComicType } from "@/helpers/types/comic.type";
import { useParams } from "react-router-dom";

const ListComicView = () => {
  const params = useParams();
  const { data, loading } = useFetchCharacterdata(params.characterId || "");
 
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <ListComicsTitle />
          <ListContainer>
            {data[0]?.comics?.items?.map((comic: ComicType) => {
              return <ListComicItem key={comic.name} name={comic.name} />;
            })}
          </ListContainer>
        </>
      )}
    </>
  );
};

export default ListComicView;
