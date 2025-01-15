const apiEndpoints = {
  loginUser: "login",
  createUser: "api/users",
  getUserData: "profile",
  verifyOtp: "api/users/verifyOTP",
  resendOtp: "api/users/resendOTP",

  getProducts: "api/products",

  getStreams: "api/oqim",
  createStream: (id) => `api/oqim/${id}`,
};

export default apiEndpoints;
