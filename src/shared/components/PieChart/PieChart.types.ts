type PieChartConfig = {
  legendFontColor: string;
  legendFontSize: number;
};

type ChartData = {
  label: string;
  color: string;
  value: number;
  percentage: string;
};

type PieChartProps<A> = {
  data: Array<A>;
  accessor: string;
  height: number;
  legendField: string;
  getPierChartData: (pieChartInfo: Array<ChartData>) => void;
};

export type { PieChartConfig, PieChartProps, ChartData };
