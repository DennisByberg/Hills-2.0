// scss
import "./App.scss";
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
// redux
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <section className={`App ${darkMode ? "App--dark" : "App--light"}`}>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
