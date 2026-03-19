import { PieChart as PieChartComponent } from 'react-native-chart-kit';
import { useEffect, useState } from 'react';

import { DEVICE } from '@/shared/constants/device';
import { styles } from './PieChart.styles';
import { ChartData, PieChartProps } from './PieChart.types';
import { chartColors, chartDefaultConfig } from './PieChart.constants';
import { PercentageUtil } from '@/shared/utils/percentage.util';

export function PieChart<A>(props: PieChartProps<A>) {
  const [data, setData] = useState([] as Array<A>);

  const renderData = (data: Array<A>) => {
    const chartData = chartColors.slice(0, data.length).map((color, index) => ({
      ...chartDefaultConfig,
      color,
      ...data[index],
    }));

    setData(chartData);

    return chartData;
  };

  const getPierChartData = (data: Array<any>): Array<ChartData> => {
    const total = data.reduce((acc, item) => acc + item[props.accessor], 0);

    return data
      .map((d) => ({
        label: d[props.legendField],
        color: d.color,
        value: d[props.accessor],
        percentage: `${PercentageUtil.calculatePercentage(d[props.accessor], total)}`,
      }))
      .sort((a, b) => b.value - a.value);
  };

  useEffect(() => {
    const chartData = renderData(props.data);
    props.getPierChartData(getPierChartData(chartData));
  }, []);

  return (
    <PieChartComponent
      style={styles.chart}
      data={data}
      width={DEVICE.width / 2}
      height={props.height}
      chartConfig={{
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      accessor={props.accessor}
      backgroundColor={styles.chart.backgroundColor}
      paddingLeft={'0'}
      hasLegend={false}
      center={[55, 0]}
    />
  );
}
