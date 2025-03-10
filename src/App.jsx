import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <div>
          <i>The page u are searching for not found!</i>
        </div>
      ),
      children: [
        {
          path: "/about",
          element: <About />,
          errorElement: (
            <div>
              <i>The page u are searching for not found!</i>
            </div>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
