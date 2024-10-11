import { useNavigate } from "react-router-dom";

const Error = ({ text }: { text: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold text-red-400">
        Error fetching the data
      </h2>
      <p className="my-4">{text}</p>
      <div>
        <button
          className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
        <button
          className="mt-4 mx-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => navigate("/page/1")}
        >
          Redirect Home
        </button>
      </div>
    </div>
  );
};

export default Error;
