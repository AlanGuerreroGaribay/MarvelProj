export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[100%] flex flex-col items-center">{children}</div>;
};

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="fixed top-0 bg-gray-800 w-[100%] text-white shadow-md flex z-30 justify-center items-center">
      <div className="flex justify-between items-center p-6 w-[100%] max-w-[1350px]">
        <h1 className="md:text-2xl font-bold">Marvel Characters</h1>
        {children}
      </div>
    </header>
  );
};

export const Body = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-[100%] mt-[80px] flex flex-col items-center max-w-[1350px]">
      {children}
    </main>
  );
};
