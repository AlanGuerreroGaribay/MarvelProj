import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCurrentPage = (page: string) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (Number(page) > 12) {
      navigate(`/page/12`);
      setCurrentPage(12);
      return;
    }
    setCurrentPage(Number(page));
  }, [page, navigate]);

  return currentPage;
};
