import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Image from "./pages/Image";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "admin",
    element: <Login />,
  },
  {
    path: "admin/home",
    element: <Home />,
  },
  {
    path: "imageGallery",
    element: <Image />,
  },
  {
    path: "imageGallery/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
