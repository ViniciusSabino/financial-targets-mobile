import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart/PieChart';
import { PieChartLegend } from '@/shared/components/PieChart/PieChart.types';
import { EstimatedReleasesProps, SummaryPerType } from './EstimatedReleases.types';
import { AmountUtil } from '@/shared/utils/amount.util';
import { darkColors } from '@/shared/themes';

const renderLoading = () => (
  <ActivityIndicator size={'large'} color={darkColors.primary} style={styles.loading} />
);

export function EstimatedReleases(props: EstimatedReleasesProps) {
  const [pieChartLegend, setPieChartLegend] = useState([] as Array<PieChartLegend>);

  const { summaryIncomes, isLoading } = props;

  const renderEstimatedReleases = (summariesPerType: SummaryPerType[]) => (
    <>
      <View style={styles.chartContainer}>
        <PieChart<SummaryPerType>
          data={summariesPerType}
          accessor="amount"
          height={255}
          legendField="type"
          getPierChartLegend={(pieChartLegend: Array<PieChartLegend>) => {
            setPieChartLegend(pieChartLegend);
          }}
        ></PieChart>
      </View>
      <FlatList
        data={pieChartLegend}
        renderItem={({ item }) => (
          <View style={styles.legendRow} key={item.label}>
            <View style={styles.legendColorBody}>
              <MaterialIcons name="circle" size={28} color={item.color} />
            </View>
            <View style={styles.legendPercentageBody}>
              <Text style={styles.legendText}>{item.percentage}</Text>
            </View>
            <View style={styles.legendItemBody}>
              <Text style={styles.legendText}>
                {AmountUtil.formatAmount(item.value)}
                {''}
              </Text>
            </View>
            <View style={styles.legendItemBody}>
              <Text style={styles.legendText}>{item.label}</Text>
            </View>
          </View>
        )}
      ></FlatList>
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Estimado para o Mês</Text>
      <Text style={styles.totalText}>
        {isLoading
          ? AmountUtil.formatAmount(0)
          : AmountUtil.formatAmount(summaryIncomes.totalExpected)}
      </Text>
      {isLoading
        ? renderLoading()
        : renderEstimatedReleases(summaryIncomes.summariesPerType)}
    </View>
  );
}
