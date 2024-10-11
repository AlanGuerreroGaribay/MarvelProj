import {
  PaginationButtons,
  PaginationContainer,
  PaginationNextButton,
  PaginationPrevButton,
} from "@/components/Pagination/Pagination";
import { useCurrentPage } from "@/helpers/hooks/useCurrentPage";
import { useParams } from "react-router-dom";

const PaginatorView = () => {
  const params = useParams();
  const page = useCurrentPage(params.page || "");

  return (
    <PaginationContainer>
      <PaginationPrevButton page={page} />
      <PaginationButtons />
      <PaginationNextButton page={page} />
    </PaginationContainer>
  );
};

export default PaginatorView;
