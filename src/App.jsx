import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Menambahkan semua ikon dari solid ke library
library.add(fas);
library.add(fab);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
