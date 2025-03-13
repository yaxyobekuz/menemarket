const apiEndpoints = {
  // Home
  home: "home",

  // Donate
  donate: "api/donate",
  getDonateBox: "api/dbox",
  getDonates: "api/donate/all",

  // Payments
  getPayments: "api/payments",
  createPayment: "api/payments",

  // Auth
  logout: "logout",
  loginUser: "login",
  createUser: "api/users",
  verifyOtp: "api/users/verifyOTP",
  resendOtp: "api/users/resendOTP",

  // News
  getNews: "api/news",
  getNewsById: (id) => `api/news/${id}`,

  // Blogs
  getBlogs: "api/blogs",
  getBlogById: (id) => `api/blogs/${id}`,

  // User
  getUserData: "profile",
  updateProfile: (id) => `api/users/${id}`,

  // Orders
  createOrder: (id) => `api/orders/${id}`,
  getStreamsOrders: "api/orders/seller/all",

  // Media
  uploadProfileImage: "/files/upload/profile",

  // Comments
  createComment: (id) => `api/comments/${id}`,

  // Streams
  getStreams: "api/oqim",
  getStream: (id) => `api/oqim/${id}`,
  createStream: (id) => `api/oqim/${id}`,
  deleteStream: (id) => `api/oqim/${id}`,
  createStreamOrder: (id) => `api/oqim/${id}/order`,

  // Products
  getProducts: "api/products",
  getProduct: (id) => `api/products/${id}`,
  updateTelegramId: "api/messenger/link_user",
  getProductComments: (id) => `api/comments/product/${id}`,

  // Recovery
  changeEmail: "api/recovery/reset-email",
  changePassword: "api/recovery/reset-password",
  sendOtpCodeToEmail: "api/recovery/forgot-password",
  changePasswordByOtp: "api/recovery/forgot-password/verify-and-change",
};

export default apiEndpoints;
