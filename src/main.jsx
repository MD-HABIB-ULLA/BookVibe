import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/errorpage/ErrorPage.jsx";
import Listedbooks from "./components/listedbooks/Listedbooks.jsx";
import Pagestoread from "./components/pagestoread/Pagestoread.jsx";
import Home from "./components/home/Home.jsx";
import Details from "./components/Details/Details.jsx";
import Read from "./components/listedbooks/Read.jsx";
// import WishCard from "./components/listedbooks/WishCard.jsx";
// import Wish from "./components/listedbooks/Wish.jsx";
import Wish2 from "./components/listedbooks/Wish2.jsx";
// import wish from "./components/listedbooks/wish.jsx";
// import Wish from "./components/listedbooks/Wish.jsx";

const router = createBrowserRouter([
  {
    path: "",

    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        loader: () => fetch("/books.json"),
        element: <Home />,
      },
      {
        path: "/listedbooks",
        element: <Listedbooks />,
        children: [
          {
            path: "/listedbooks/read",
            element: <Read />,
          },
          {
            path:"/listedbooks/wish",
            element: <Wish2/>
          }
        ],
      },
      {
        path: "/pagestoread",
        element: <Pagestoread />,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/books.json"),
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
