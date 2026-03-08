type PieChartConfig = {
  legendFontColor: string;
  legendFontSize: number;
};

type PieChartDataInfo = {
  info: string;
  color: string;
};

type PieChartProps<A> = {
  data: Array<A>;
  accessor: string;
  height: number;
  legendField: string;
  getPierChartInfo: (pieChartInfo: Array<PieChartDataInfo>) => void;
};

export type { PieChartConfig, PieChartProps, PieChartDataInfo };
