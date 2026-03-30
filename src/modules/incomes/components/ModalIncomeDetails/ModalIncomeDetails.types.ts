import { ChartData } from '@/shared/components/PieChart/PieChart.types';
import { Income } from '../CurrentIncomes/CurrentIncomes.types';

type ModalIncomeDetailsProps = {
  currentIncome: Income | null;
  incomeTypeChartData: Array<ChartData>;
  modalIncomeVisible: boolean;
  setModalIncomeVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type ModalIncomeDetailsBodyProps = {
  currentIncome: Income | null;
};

export type { ModalIncomeDetailsProps, ModalIncomeDetailsBodyProps };
