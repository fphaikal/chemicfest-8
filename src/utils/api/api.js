import axios from "axios";

const apiCf = axios.create({
  baseURL: "https://chemicfest.site/api/",
});

const jkt48Api = axios.create({
  baseURL: "https://api.crstlnz.my.id/api/",
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

const getJKT48 = async (endpoint) => {
  try {
    const response = await jkt48Api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data dari API Member:", error);
    return null;
  }
};
export { getUser, getAll, getJKT48 };
