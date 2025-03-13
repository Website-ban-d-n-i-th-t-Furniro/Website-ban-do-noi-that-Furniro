import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutWebsite from "./page/(website)/layout";

function App() {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LayoutWebsite />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  );
}

export default App;
