import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";

const AppRoutesV2 = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/product", element: <ProductPage /> },
]);
function App() {
  return <RouterProvider router={AppRoutesV2} />;
}

export default App;
