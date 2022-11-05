const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch(`http://localhost:15000/products`),
  },
]);

export default router;
