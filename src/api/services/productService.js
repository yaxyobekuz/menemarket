// Config
import api from "../axiosConfig";

// Endpoints
import endpoints from "../apiEndpoints";

const productService = {
  getProducts: async (data) => {
    try {
      return await api.get(endpoints.getProducts, data);
    } catch (err) {
      throw err;
    }
  },
};

export default productService;
