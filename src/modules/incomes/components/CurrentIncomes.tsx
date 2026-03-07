import { View, Text, ScrollView, FlatList, TouchableHighlight } from 'react-native';

import { styles } from './CurrentIncomes.styles';
import { Divider } from '@/shared/components/Divider';

const Income = ({ income }: any) => (
  <TouchableHighlight onPress={() => alert('teste')}>
    <View style={styles.income}>
      <Text style={styles.incomeInfo}>{income.date}</Text>
      <Text style={styles.incomeInfo}>{income.amount}</Text>
      <Text style={styles.incomeInfo}>{income.type}</Text>
    </View>
  </TouchableHighlight>
);

const COLUMN = {
  account: 'Conta',
  tipo: 'Tipo',
  amount: 'Valor',
  date: 'Data',
  description: 'Descrição',
};

const DATA = [
  {
    id: '1',
    account: 'C6 Bank',
    type: 'Salário',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '2',
    account: 'C6 Bank',
    type: 'Freelancer',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '3',
    account: 'C6 Bank',
    type: 'Décimo',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '4',
    account: 'C6 Bank',
    type: 'PLR',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '5',
    account: 'C6 Bank',
    type: 'Outros',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '6',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '7',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
  {
    id: '8',
    account: 'C6 Bank',
    type: 'Outro',
    amount: 'R$ 900,00',
    date: '01/03/2026',
    description: 'Uma descrição aqui',
  },
];

export function CurrentIncomes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas de Março</Text>
      <View style={styles.headers}>
        <Text style={styles.headerText}>{COLUMN.date}</Text>
        <Text style={styles.headerText}>{COLUMN.amount}</Text>
        <Text style={styles.headerText}>{COLUMN.tipo}</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <FlatList
            data={DATA}
            renderItem={({ item, index }) => <Income income={item} index={index} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
      <Divider />
    </View>
  );
}
