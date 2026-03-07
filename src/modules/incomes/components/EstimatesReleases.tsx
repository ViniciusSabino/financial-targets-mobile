import { View, Text } from 'react-native';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart';

const data = [
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
          <PieChart data={data} accessor={'amount'} height={255}></PieChart>
        </View>
        <View style={styles.chartLegendContainer}></View>
      </View>
    </View>
  );
}
