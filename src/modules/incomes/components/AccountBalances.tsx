import { View, FlatList, Text } from 'react-native';

import { styles } from './AccountBalances.styles';
import { Account, AccountBalancesProps } from '../types';

const AccountBalanceItem = ({ name, balance }: Account) => (
  <View style={styles.accountBalanceItem}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{balance}</Text>
  </View>
);

export function AccountBalances(props: AccountBalancesProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Saldos Atuais ({props.accounts.length}{' '}
        {props.accounts.length > 1 ? 'Contas' : 'Conta'})
      </Text>
      <View style={styles.balanceListContainer}>
        <FlatList
          horizontal={true}
          data={props.accounts}
          renderItem={({ item }) => (
            <AccountBalanceItem
              name={item.name}
              balance={item.balance}
              accountId={item.accountId}
            />
          )}
          keyExtractor={(item) => item.accountId}
        />
      </View>
    </View>
  );
}
