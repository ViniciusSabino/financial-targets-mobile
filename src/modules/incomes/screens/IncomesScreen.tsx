import { View } from 'react-native';

import { AccountBalances } from '../components/AccountBalances';
import { CurrentIncomes } from '../components/CurrentIncomes';
import { MyIncomes } from '../components/MyIncomes';
import { styles } from './IncomesScreen.styles';
import { useAccountBalances } from '../hooks/useAccountBalances';
import { IncomesFooter } from '../components/IncomesFooter';

export function IncomesScreen() {
  const { accounts, isLoading, error } = useAccountBalances();

  return (
    <View style={styles.container}>
      <AccountBalances accounts={accounts} isLoading={isLoading} error={error} />
      <CurrentIncomes />
      <MyIncomes />
      <IncomesFooter />
    </View>
  );
}
