import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Components
import Modal from "./components/Modal";

// Toaster (For notification)
import { Toaster } from "react-hot-toast";

// Redux
import { useSelector } from "react-redux";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/Home";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Orders from "./pages/Orders";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Product from "./pages/Product";
import Streams from "./pages/Streams";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Contests from "./pages/Contests";
import VerifyOTP from "./pages/VerifyOTP";
import TargetApi from "./pages/TargetApi";
import DonateBox from "./pages/DonateBox";
import Dashboard from "./pages/Dashboard";
import NewStream from "./pages/NewStream";
import EditEmail from "./pages/EditEmail";
import NewsDetail from "./pages/NewsDetail";
import ForgotSent from "./pages/ForgotSent";
import EditProfile from "./pages/EditProfile";
import EditPassword from "./pages/EditPassword";
import StreamProduct from "./pages/StreamProduct";
import BalanceHistory from "./pages/BalanceHistory";
import ForgotPassword from "./pages/ForgotPassword";
import ConnectTelegram from "./pages/ConnectTelegram";
import RecoveryPassword from "./pages/RecoveryPassword";

const App = () => {
  const modal = useSelector((state) => state.modal);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* For user */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify-otp" element={<VerifyOTP />} />
            <Route path="forgot-sent" element={<ForgotSent />} />
            <Route path="forgot" element={<RecoveryPassword />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="success" element={<Success />} />
          <Route path="blogs/blog/:blogId" element={<Blog />} />
          <Route path="o/:streamId" element={<StreamProduct />} />
          <Route path="products/:productType?" element={<Products />} />
          <Route path="products/product/:productId" element={<Product />} />
        </Route>

        {/* For admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            element={<BalanceHistory />}
            path="dashboard/balance-history"
          />
          <Route path="streams" element={<Streams />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard/news" element={<News />} />
          <Route path="dashboard/orders" element={<Orders />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/donate" element={<DonateBox />} />
          <Route path="dashboard/contests" element={<Contests />} />
          <Route path="profile/edit-email" element={<EditEmail />} />
          <Route path="streams/target-api" element={<TargetApi />} />
          <Route path="dashboard/news/:newsId" element={<NewsDetail />} />
          <Route path="new-stream/:productType?" element={<NewStream />} />
          <Route path="profile/edit-password" element={<EditPassword />} />
          <Route path="profile/forgot-password" element={<ForgotPassword />} />
          <Route
            element={<ConnectTelegram />}
            path="profile/connect-telegram"
          />
        </Route>

        {/* Page 404 */}
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );

  return (
    <>
      {/* Router */}
      <RouterProvider router={router} />

      {/* Toaster */}
      <Toaster />

      {/* Modal */}
      {modal.isOpen && <Modal />}
    </>
  );
};

export default App;
