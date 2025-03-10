// Config
import api from "../axiosConfig";

// Endpoints
import endpoints from "../apiEndpoints";

const orderService = {
  createOrder: async (id, data) => {
    try {
      return await api.post(endpoints.createOrder(id), data);
    } catch (err) {
      throw err;
    }
  },

  getStreamsOrders: async () => {
    try {
      return await api.get(endpoints.getStreamsOrders);
    } catch (err) {
      throw err;
    }
  },
};

export default orderService;
