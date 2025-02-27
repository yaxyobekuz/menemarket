// Config
import api from "../axiosConfig";

// Endpoints
import endpoints from "../apiEndpoints";

const donateService = {
  donate: async (data) => {
    try {
      return await api.post(endpoints.donate, data);
    } catch (err) {
      throw err;
    }
  },

  getDonateBox: async () => {
    try {
      return await api.get(endpoints.getDonateBox);
    } catch (err) {
      throw err;
    }
  },

  getDonates: async () => {
    try {
      return await api.get(endpoints.getDonates);
    } catch (err) {
      throw err;
    }
  },
};

export default donateService;
