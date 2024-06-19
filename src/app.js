import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Body from "./component/Body";
import Error from "./component/Error";
import Footer from "./component/Footer";
import Header from "./component/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
