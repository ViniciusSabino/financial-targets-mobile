import { PieChart as PieChartComponent } from 'react-native-chart-kit';

import { DEVICE } from '@/shared/constants/device';
import { styles } from './PieChart.style';
import { darkColors, fontSizes } from '../themes';

const chartDefaultConfig = {
  legendFontColor: darkColors.primary,
  legendFontSize: fontSizes.body,
};

// TODO: Definir uma variedade de cores e distribuir de acordo com a quantidade de dados
const chartColors = [
  '#193336',
  '#19361F',
  '#363219',
  '#361919',
  '#361933',
  '#561414',
  '#143156',
  '#145645',
];

const renderData = (data: Array<any>) => {
  return chartColors.slice(0, data.length).map((color, index) => ({
    ...chartDefaultConfig,
    color,
    ...data[index],
  }));
};

//TODO: Criar type para as props do PieChart
export function PieChart(props: any) {
  return (
    <PieChartComponent
      style={styles.chart}
      data={renderData(props.data)}
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
