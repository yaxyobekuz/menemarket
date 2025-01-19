const apiEndpoints = {
  logout: "logout",
  loginUser: "login",
  createUser: "api/users",
  getUserData: "profile",
  verifyOtp: "api/users/verifyOTP",
  resendOtp: "api/users/resendOTP",

  getProducts: "api/products",
  getProduct: (id) => `api/products/${id}`,

  getNews: "api/news",
  getNewsById: (id) => `api/news/${id}`,

  getStreams: "api/oqim",
  createStream: (id) => `api/oqim/${id}`,

  createOrder: (id) => `api/orders/${id}`,
};

export default apiEndpoints;
