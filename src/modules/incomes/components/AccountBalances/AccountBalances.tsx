import { View, FlatList, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './AccountBalances.styles';
import { Account, AccountBalancesProps } from './AccountBalances.types';

const AccountBalanceItem = ({ name, balance }: Account) => (
  <View style={styles.balance}>
    <Text style={styles.balanceInfo}>{name}</Text>
    <Text style={styles.balanceInfo}>{balance}</Text>
  </View>
);

export function AccountBalances(props: AccountBalancesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="attach-money" style={styles.icons} />
        <Text style={styles.title}>
          Saldos Atuais - {props.accounts.length}{' '}
          {props.accounts.length > 1 ? 'Contas' : 'Conta'} - R$ 0,00
        </Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={props.accounts}
          horizontal={true}
          renderItem={({ item }) => (
            <AccountBalanceItem
              name={item.name}
              balance={item.balance}
              accountId={item.accountId}
            />
          )}
          style={styles.balancesList}
          keyExtractor={(item) => item.accountId}
        />
      </View>
    </View>
  );
}
