import { PieChart as PieChartComponent } from 'react-native-chart-kit';
import { useEffect, useState } from 'react';

import { DEVICE } from '@/shared/constants/device';
import { styles } from './PieChart.styles';
import { PieChartDataInfo, PieChartProps } from './PieChart.types';
import { chartColors, chartDefaultConfig } from './PieChart.constants';

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

  const getPierChartInfo = (data: Array<any>): Array<PieChartDataInfo> => {
    return data.map((d) => ({
      info: d[props.legendField],
      color: d.color,
    }));
  };

  useEffect(() => {
    const chartData = renderData(props.data);
    props.getPierChartInfo(getPierChartInfo(chartData));
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
      absolute
      hasLegend={false}
      center={[55, 0]}
    />
  );
}
