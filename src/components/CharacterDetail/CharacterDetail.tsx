export const CharacterDetailContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      data-testid="character-detail-container"
      className="w-[100%] mx-auto p-6"
    >
      {children}
    </div>
  );
};

export const CharacterDetailHeader = ({
  characterName,
}: {
  characterName: string;
}) => {
  return <h1 className="text-3xl font-bold mb-4">{characterName}</h1>;
};

export const CharacterDetailBody = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      {children}
    </div>
  );
};

export const CharacterDetailImage = ({
  characterThumbnail,
}: {
  characterThumbnail: string;
}) => {
  return (
    <img
      data-testid="character-detail-image"
      className="w-64 h-64 object-cover rounded-lg"
      src={characterThumbnail}
      alt="character detail"
    />
  );
};

export const CharacterDetailText = ({ text }: { text: string }) => {
  return (
    <p className="text-lg text-gray-700 mb-4">
      {text || "Not  Description found"}
    </p>
  );
};
