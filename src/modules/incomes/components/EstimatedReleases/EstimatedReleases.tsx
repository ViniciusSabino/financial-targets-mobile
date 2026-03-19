import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './EstimatedReleases.styles';
import { PieChart } from '@/shared/components/PieChart/PieChart';
import { ChartData } from '@/shared/components/PieChart/PieChart.types';
import { EstimatedReleasesProps, SummaryPerType } from './EstimatedReleases.types';
import { AmountUtil } from '@/shared/utils/amount.util';
import { darkColors } from '@/shared/themes';
import { useIncomesScreenStore } from '../../screens/IncomesScreenStore';

const renderLoading = () => (
  <ActivityIndicator size={'large'} color={darkColors.primary} style={styles.loading} />
);

export function EstimatedReleases(props: EstimatedReleasesProps) {
  const { summaryIncomes, isLoading } = props;

  const [incomeTypeChartData, setIncomeTypeChartDataState] = useState<Array<ChartData>>(
    [],
  );

  const setIncomeTypeChartDataStore = useIncomesScreenStore(
    (state) => state.setIncomeTypeChartData,
  );

  const renderEstimatedReleases = (summariesPerType: SummaryPerType[]) => (
    <>
      <View style={styles.chartContainer}>
        <PieChart<SummaryPerType>
          data={summariesPerType}
          accessor="amount"
          height={255}
          legendField="type"
          getPierChartData={(pieChartData: Array<ChartData>) => {
            setIncomeTypeChartDataState(pieChartData);
            setIncomeTypeChartDataStore(pieChartData);
          }}
        ></PieChart>
      </View>
      <FlatList
        scrollEnabled={false}
        data={incomeTypeChartData}
        renderItem={({ item }) => (
          <View style={styles.legendRow} key={item.label}>
            <View style={styles.legendColor}>
              <MaterialIcons name="circle" size={28} color={item.color} />
            </View>
            <View style={styles.legendPercentage}>
              <Text style={styles.legendText}>{item.percentage}</Text>
            </View>
            <View style={styles.legendItem}>
              <Text style={styles.legendText}>
                {AmountUtil.formatAmount(item.value)}
                {''}
              </Text>
            </View>
            <View style={styles.legendItem}>
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
function setState(arg0: {
  (arrayLength: number): ChartData[];
  (...items: ChartData[]): ChartData[];
  new (arrayLength: number): ChartData[];
  new (...items: ChartData[]): ChartData[];
  isArray(arg: any): arg is any[];
  readonly prototype: any[];
  from<T>(arrayLike: ArrayLike<T>): T[];
  from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
  from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
  from<T, U>(
    iterable: Iterable<T> | ArrayLike<T>,
    mapfn: (v: T, k: number) => U,
    thisArg?: any,
  ): U[];
  of<T>(...items: T[]): T[];
  fromAsync<T>(
    iterableOrArrayLike:
      | AsyncIterable<T>
      | Iterable<T | PromiseLike<T>>
      | ArrayLike<T | PromiseLike<T>>,
  ): Promise<T[]>;
  fromAsync<T, U>(
    iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>,
    mapFn: (value: Awaited<T>, index: number) => U,
    thisArg?: any,
  ): Promise<Awaited<U>[]>;
  readonly [Symbol.species]: ArrayConstructor;
}): [any, any] {
  throw new Error('Function not implemented.');
}
