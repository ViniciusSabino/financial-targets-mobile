import { create } from 'zustand';
import { Income } from '../components/CurrentIncomes/CurrentIncomes.types';
import { ChartData } from '@/shared/components/PieChart/PieChart.types';

type IncomesScreenStore = {
  currentIncomeDetails: Income | null;
  incomeTypeChartData: Array<ChartData>;

  setCurrentIncomeDetails: (income: Income) => void;
  clearCurrentIncomeDetails: () => void;

  setIncomeTypeChartData: (chartData: Array<ChartData>) => void;
  clearIncomeTypeChartData: () => void;

  // reset: () => void;
};

const initialState = {
  currentIncomeDetails: null,
  incomeTypeChartData: [],
};

const useIncomesScreenStore = create<IncomesScreenStore>((set) => ({
  ...initialState,

  setCurrentIncomeDetails: (income) => set({ currentIncomeDetails: income }),
  clearCurrentIncomeDetails: () => set({ currentIncomeDetails: null }),

  setIncomeTypeChartData: (chartData) => set({ incomeTypeChartData: chartData }),
  clearIncomeTypeChartData: () => set({ incomeTypeChartData: [] }),
}));

export { useIncomesScreenStore };
