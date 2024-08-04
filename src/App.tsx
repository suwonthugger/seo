import "./App.css";
import Bpage from "./pages/Bpage";
import Apage from "./pages/Apage";
import MainPage from "./pages/MainPage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
