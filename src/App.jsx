import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Products from "./pages/Products";

// Layouts
import MainLayout from "./layouts/MainLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products/:x?" element={<Products />} />
        <Route path="search" element={<Search />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
