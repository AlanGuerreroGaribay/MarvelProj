import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Loading } from "@/components/Loading/Loading";
import LayoutView from "@/views/LayoutView";
import Error from "@/components/Error/Error";

const App = lazy(() => import("../pages/Home/App"));
const CharacterDetailPage = lazy(
  () => import("../pages/CharacterDetailPage/CharacterDetailPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutView />,
    errorElement: <Error text="404 page not found" />,
    children: [
      {
        path: "/",
        element: <Navigate to="/page/1" />,
      },
      {
        path: "/page/:page",
        element: <Suspense fallback={<Loading />}>{<App />}</Suspense>,
      },
      {
        path: "/character/:characterId",
        element: (
          <Suspense fallback={<Loading />}>{<CharacterDetailPage />}</Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default Router;
