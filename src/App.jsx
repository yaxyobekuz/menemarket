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
import Streams from "./pages/Streams";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewStream from "./pages/NewStream";
import Statistics from "./pages/Statistics";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import News from "./pages/News";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* For user */}
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

        {/* For admin */}
        <Route path="/admin/:a?" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/news" element={<News />} />
          <Route path="new-stream" element={<NewStream />} />
          <Route path="streams" element={<Streams />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
