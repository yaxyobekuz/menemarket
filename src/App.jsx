import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewStream from "./pages/NewStream";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* FOR USER */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:productType?" element={<Products />} />
          <Route path="products/product/:productId" element={<Product />} />
          <Route path="search" element={<Search />} />
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* FOR ADMIN */}
        <Route path="/admin/:a?" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-stream" element={<NewStream />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
