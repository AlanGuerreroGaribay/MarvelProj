import { useScreenSize } from "@/helpers/hooks/useScreenSize";

export const NavBar = () => {
  const screenSize = useScreenSize();

  return (
    <>
      {screenSize.width > 768 && (
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-gray-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <p className="hover:text-gray-400 transition duration-300">
                Comics
              </p>
            </li>
            <li>
              <p className="hover:text-gray-400 transition duration-300">
                About
              </p>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export const ShowSideBarButton = ({ handler }: { handler(): void }) => {
  const screenSize = useScreenSize();

  const showHander = () => {
    handler();
  };

  return (
    <>
      {screenSize.width < 768 && (
        <button
          onClick={() => showHander()}
          className="fixed top-5 right-3 md:hidden p-4 text-white bg-gray-900 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export const SideBar = ({
  show,
  handler,
}: {
  show: boolean;
  handler(): void;
}) => {
  const screenSize = useScreenSize();
  const showHander = () => {
    handler();
  };

  return (
    <>
      {screenSize.width < 768 && (
        <div className="w-full h-full bg-opacity-30">
          <div
            className={`fixed top-0 right-0 h-full w-[80%] bg-gray-800 text-white transform ${
              show ? "translate-x-full" : "-translate-x-0"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              onClick={() => showHander()}
              className="fixed top-5 right-3 md:hidden p-4 text-white bg-gray-900 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul className="flex flex-col p-6 space-y-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <p className="hover:text-gray-400">Comics</p>
              </li>
              <li>
                <p className="hover:text-gray-400">About</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
