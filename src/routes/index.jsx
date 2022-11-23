import { createBrowserRouter } from "react-router-dom";

import { Layout, Home } from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
