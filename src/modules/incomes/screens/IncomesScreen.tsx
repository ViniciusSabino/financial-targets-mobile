import { View } from 'react-native';

import { styles } from './IncomesScreen.styles';
import { EstimatedReleases } from '../components/EstimatedReleases/EstimatedReleases';
import { CurrentIncomes } from '../components/CurrentIncomes/CurrentIncomes';
import { Divider } from '@shared/components/Divider/Divider';
import { useCurrentIncomes } from '../hooks/useCurrentIncomes';
import { useSummaryIncomes } from '../hooks/useSummaryIncomes';

export function IncomesScreen() {
  const { incomes, isLoadingCurrentIncomes, useCurrentIncomesError } =
    useCurrentIncomes();

  const { summaryIncomes, isLoadingSummary, useSummaryIncomesError } =
    useSummaryIncomes();

  return (
    <View style={styles.container}>
      <CurrentIncomes
        incomes={incomes}
        isLoading={isLoadingCurrentIncomes}
        error={useCurrentIncomesError}
      />
      <Divider />
      <EstimatedReleases
        summaryIncomes={summaryIncomes}
        isLoading={isLoadingSummary}
        error={useSummaryIncomesError}
      />
    </View>
  );
}
