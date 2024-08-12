import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:id", element: <Detail /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
