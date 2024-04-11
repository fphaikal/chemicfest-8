import axios from "axios";

const apiCf = axios.create({
  baseURL: "https://chemicfest.site/api/",
});

const vercelApi = axios.create({
  baseURL: "https://api.vercel.com/",
});

//JKT48 API
const jkt48Api = axios.create({
  baseURL: "https://api.crstlnz.my.id/api/",
});
const scheduleJKT48 = axios.create({
  baseURL: "https://showroom-admin.vercel.app/",
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

const getAnalytics = async (endpoint) => {
  try {
    const response = await vercelApi.get(endpoint, {
      headers: {
        Authorization: 'Bearer lEAgQvGAR762coWfHppaiHGI',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;

  } catch (error) {
    console.error("Gagal mengambil data vercel dari API:", error);
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

const getScheduleJKT48 = async (endpoint) => {
  try {
    const response = await scheduleJKT48.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data dari API Schedule:", error);
    return null;
  }
};
export { getUser, getAll, getAnalytics, getJKT48, getScheduleJKT48 };
