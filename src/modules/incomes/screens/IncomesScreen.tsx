import { View } from 'react-native';

import { styles } from './IncomesScreen.styles';
import { useAccountBalances } from '../hooks/useAccountBalances';
import { EstimatedReleases } from '../components/EstimatesReleases';
import { AccountBalances } from '../components/AccountBalances';
import { CurrentIncomes } from '../components/CurrentIncomes';

export function IncomesScreen() {
  const { accounts, isLoading, error } = useAccountBalances();

  return (
    <View style={styles.container}>
      <AccountBalances accounts={accounts} isLoading={isLoading} error={error} />
      <CurrentIncomes />
      <EstimatedReleases />
    </View>
  );
}
