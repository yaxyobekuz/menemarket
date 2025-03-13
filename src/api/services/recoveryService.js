// Config
import api from "../axiosConfig";

// Endpoints
import endpoints from "../apiEndpoints";

const recoveryService = {
  changeEmail: async (data) => {
    try {
      return await api.put(endpoints.changeEmail, data);
    } catch (err) {
      throw err;
    }
  },

  changePassword: async (data) => {
    try {
      return await api.put(endpoints.changePassword, data);
    } catch (err) {
      throw err;
    }
  },

  changePasswordByOtp: async (data) => {
    try {
      return await api.put(endpoints.changePasswordByOtp, data);
    } catch (err) {
      throw err;
    }
  },

  sendOtpCodeToEmail: async (data) => {
    try {
      return await api.post(endpoints.sendOtpCodeToEmail, data);
    } catch (err) {
      throw err;
    }
  },
};

export default recoveryService;
