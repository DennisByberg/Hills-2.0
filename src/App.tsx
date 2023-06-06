// scss
import "./App.scss";
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <section className="App">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
