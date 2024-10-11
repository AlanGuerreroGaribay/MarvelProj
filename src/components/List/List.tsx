import { ListItemType } from "@/helpers/types/ListItem.type";
import { useNavigate } from "react-router-dom";

export const ListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 ">
      {children}
    </div>
  );
};

export const ListComicsTitle = () => {
  return (
    <h2 className="md:font-extrabold md:text-2xl font-medium">
      List of comics related
    </h2>
  );
};

export const ListCharacterItem = ({
  id,
  name,
  thumbnail,
  extension,
}: ListItemType) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/character/${id}`);
      }}
      className="bg-white h-[250px] md:h-[400px] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-opacity duration-300 cursor-pointer hover:opacity-15 active:opacity-25"
    >
      <>
        <img
          className="w-full h-[60%] object-cover"
          src={`${thumbnail}.${extension}`}
          alt=""
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            {name.substring(0, 20)}
          </h3>
        </div>
      </>
    </div>
  );
};

export const ListComicItem = ({ name }: { name: string }) => {
  return (
    <div className="list-disc px-2 py-4 bg-white rounded-md hover:opacity-80">
      <div className="align-middle text-center text-black font-bold">
        {name.toUpperCase()}
      </div>
    </div>
  );
};
