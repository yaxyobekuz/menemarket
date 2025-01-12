import axios from "axios";

// 1. Asosiy Axios konfiguratsiyasi
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // API bazaviy URL (env fayldan olinadi)
  headers: {
    "Content-Type": "application/json", // So'rovning turini belgilash
    Accept: "application/json", // API dan JSON formatida ma'lumot kutamiz
  },
});

// 2. So'rovga interceptor qo'shish (So'rov yuborilishidan oldin)
api.interceptors.request.use(
  (config) => {
    // Tokenni localStorage'dan olish
    const token = localStorage.getItem("authToken");

    // Agar token bo'lsa, uni "Authorization" headerga qo'shamiz
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // So'rovni davom ettirish
  },
  (error) => {
    return Promise.reject(error); // So'rovda xato bo'lsa
  }
);

// 3. Javobga interceptor qo'shish (Javobni qayta ishlash)
api.interceptors.response.use(
  (response) => {
    // Javob muvaffaqiyatli bo'lsa
    return response.data; // Faqat ma'lumot qismni qaytaradi
  },
  (error) => {
    // Xatolikni boshqarish
    console.error("Axios error:", error.response || error.message);

    // Agar xatolik 401 bo'lsa (Unauthorized), foydalanuvchini login sahifasiga qaytarish
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken"); // Tokenni o'chirish
      alert("Avtorizatsiyadan qayta o'ting");
    }

    return Promise.reject(error); // Xatoni davom ettirish
  }
);

export default api;
