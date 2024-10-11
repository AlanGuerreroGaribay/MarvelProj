import { useNavigate, useParams } from "react-router-dom";

export const PaginationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-wrap justify-center space-y-2 md:space-y-0 my-9 gap-2">
      {children}
    </div>
  );
};

export const PaginationButtons = () => {
  const navigate = useNavigate();
  const params = useParams();

  const pagesButtons = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {pagesButtons.map((button, i) => {
        return (
          <button
            className={`px-4 py-2  rounded-lg ${
              Number(params.page) === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition duration-300`}
            onClick={() => navigate(`/page/${i + 1}`)}
            key={`navigation-button-${i}`}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export const PaginationNextButton = ({ page }: { page: number }) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <button
      disabled={page === 12}
      className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${
        Number(params.page) === 12 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => navigate(`/page/${page + 1}`)}
    >
      Next{" >>"}
    </button>
  );
};

export const PaginationPrevButton = ({ page }: { page: number }) => {
  const navigate = useNavigate();
  const params = useParams();
  return (
    <button
      disabled={page === 1}
      className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${
        Number(params.page) === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => navigate(`/page/${page - 1}`)}
    >
      {"<<"} Prev
    </button>
  );
};
