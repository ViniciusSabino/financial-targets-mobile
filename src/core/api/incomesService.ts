import axiosInstance from '../config/axiosInstance';

const incomesService = {
  getCurrentIncomes: (month: string, year: string) => axiosInstance.get(`/incomes?month=${month}&year=${year}`),
  getIncomesSummary: (month: string, year: string) => axiosInstance.get(`/summary/incomes?month=${month}&year=${year}`),
};

export default incomesService;
