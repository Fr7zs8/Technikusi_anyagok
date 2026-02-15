import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Allatok } from "./components/Allatok";
import { Login, action as loginAuth } from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/allataink",

      element: <Allatok />,
    },
    {
      path: "/login",
      element: <Login />,
      action: loginAuth,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
