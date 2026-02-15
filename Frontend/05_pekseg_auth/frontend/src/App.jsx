import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Termekek } from "./components/Termekeink";
import { Login, action as authLogin } from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/termekek",
      element: <Termekek />,
    },
    {
      path: "/login",
      element: <Login />,
      action: authLogin,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
