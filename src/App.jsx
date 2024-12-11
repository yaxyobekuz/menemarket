import React from "react";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";

// Layouts
import MainLayout from "./layouts/MainLayout";
import Search from "./pages/Search";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/:d?" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products/:s?" element={<Products />} />
        <Route path="search" element={<Search />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
