export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      <h2 className="font-bold text-lg my-9">Loading...</h2>
    </div>
  );
};
