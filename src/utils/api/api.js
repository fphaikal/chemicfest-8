import axios from "axios";

const apiCf = axios.create({
  baseURL: "https://chemicfest.site/api/",
});

const getAll = async (endpoint) => {
  try {
    const response = await apiCf.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data dari API:", error);
    return null;
  }
};

const getUser = async (endpoint) => {
  try {
    const response = await apiCf.get(`get/user?${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data dari API User:", error);
    return null;
  }
};

export { getUser, getAll };
