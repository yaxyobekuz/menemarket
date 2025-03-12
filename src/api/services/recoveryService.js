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
};

export default recoveryService;
