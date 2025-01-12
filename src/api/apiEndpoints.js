const apiEndpoints = {
  createUser: (data) => {
    return { url: "api/users", data };
  },
  loginUser: (data) => {
    return { url: "login", data };
  },

  verifyOtp: (data) => {
    return { url: "api/users/verifyOTP", data };
  },

  resendOtp: (data) => {
    return { url: "api/users/resendOTP", data };
  },
};

export default apiEndpoints;
