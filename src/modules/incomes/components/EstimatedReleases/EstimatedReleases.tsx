import { View, Text } from 'react-native';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart/PieChart';
import { PieChartDataInfo } from '@/shared/components/PieChart/PieChart.types';
import { Release } from './EstimatedReleases.types';

const data: Array<Release> = [
  {
    name: 'Salário',
    amount: 8000,
  },
  {
    name: 'Freelancer',
    amount: 1000,
  },
  {
    name: 'Décimo',
    amount: 7000,
  },
  {
    name: 'PLR',
    amount: 500,
  },
  {
    name: 'Outros',
    amount: 2000,
  },
];

export function EstimatedReleases() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lançamentos Estimados do Mês</Text>
      <View style={styles.body}>
        <View style={styles.chartContainer}>
          <PieChart<Release>
            data={data}
            accessor="amount"
            height={255}
            legendField="name"
            getPierChartInfo={(pieChartDataInfo: Array<PieChartDataInfo>) => {
              console.log(pieChartDataInfo);
            }}
          ></PieChart>
        </View>
        <View style={styles.chartLegendContainer}></View>
      </View>
    </View>
  );
}
