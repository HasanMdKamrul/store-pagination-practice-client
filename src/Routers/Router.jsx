const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
