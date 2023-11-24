import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginAdmin from "./pages/LoginAdmin";
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
    element: <LoginAdmin />,
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
