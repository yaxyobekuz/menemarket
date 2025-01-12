// Config
import api from "../axiosConfig";

// Endpoints
import apiEndpoints from "../apiEndpoints";

const userService = {
  createUser: async (data) => {
    const { url, data: payload } = apiEndpoints.createUser(data);
    try {
      const res = await api.post(url, payload);
      return res;
    } catch (err) {
      throw err;
    }
  },

  loginUser: async (data) => {
    const { url, data: payload } = apiEndpoints.loginUser(data);
    try {
      const res = await api.post(url, payload);
      return res;
    } catch (err) {
      throw err;
    }
  },

  verifyOtp: async (data) => {
    const { url, data: payload } = apiEndpoints.verifyOtp(data);
    try {
      const res = await api.post(url, payload);
      return res;
    } catch (err) {
      throw err;
    }
  },

  resendOtp: async (data) => {
    const { url, data: payload } = apiEndpoints.resendOtp(data);
    try {
      const res = await api.post(url, payload);
      return res;
    } catch (err) {
      throw err;
    }
  },
};

export default userService;
