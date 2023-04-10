import { requestDashboardData } from "../../../service/request/dashboard.request";

export const dashboardDataAction = async () => {
    try {
      const data = await requestDashboardData();

      return data;
    } catch (error) {
      throw error.response.data;
    }
  };
