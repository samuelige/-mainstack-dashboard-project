import api from "../interceptor";

export const requestDashboardData = async () => await api.get("/");
