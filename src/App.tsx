import "./App.css";
import Bpage from "./pages/Bpage";
import Apage from "./pages/Apage";
import MainPage from "./pages/MainPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/apage",
      element: <Apage />,
    },
    {
      path: "/bpage",
      element: <Bpage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
