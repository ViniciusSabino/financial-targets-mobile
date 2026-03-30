import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Switch, TextInput, Text, View } from 'react-native';

import { AmountUtil } from '@/shared/utils/amount.util';
import { styles } from './ModalIncomeDetailsBody.styles';
import { ModalIncomeDetailsBodyProps } from './ModalIncomeDetails.types';
import { darkColors } from '@/shared/themes';
import { Income } from '../CurrentIncomes/CurrentIncomes.types';

export function ModalIncomeDetailsBody(props: ModalIncomeDetailsBodyProps) {
  const { currentIncome } = props;

  const [isReceived, setIsReceived] = useState(false);
  const [isBlockedIsReceived, setIsBlockedIsReceived] = useState(false);
  const [incomeUpdate, setIncomeUpdate] = useState<Income | null>(currentIncome);

  const toggleSwitchReceived = () => setIsReceived((previousState) => !previousState);

  useEffect(() => {
    setIsReceived(!!currentIncome?.receivedAt);
    setIsBlockedIsReceived(!!currentIncome?.receivedAt);
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Entrada Processada</Text>
        <Switch
          trackColor={{ false: darkColors.primary, true: darkColors.textSecondary }}
          thumbColor={isReceived ? darkColors.surface : darkColors.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchReceived}
          value={isReceived}
          disabled={isBlockedIsReceived}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Valor</Text>
        <TextInput
          placeholder={'Valor'}
          inputMode="decimal"
          style={styles.textInput}
          value={AmountUtil.formatAmount(incomeUpdate?.amount)}
          onChangeText={(text) => setIncomeUpdate({ ...incomeUpdate, amount: Number.parseFloat(text) } as Income)}
          editable={false}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Data</Text>
        <TextInput
          placeholder={incomeUpdate?.date ? '' : 'Informe a data de recebimento'}
          style={styles.textInput}
          value={incomeUpdate?.date}
          onChangeText={(text) => setIncomeUpdate({ ...incomeUpdate, date: text } as Income)}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Conta</Text>
        <TextInput placeholder="Conta" style={styles.textInput} value={currentIncome?.accountName} />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Recorrência</Text>
        <TextInput placeholder="Recorrência" style={styles.textInput} value={currentIncome?.recurrence} />
      </View>
      <View style={{ ...styles.inputArea }}>
        <Text style={styles.textInputLabel}>Descrição</Text>
        <TextInput
          multiline={true}
          placeholder="Acrescente uma descrição para a entrada"
          style={styles.textInput}
          value={incomeUpdate?.description || ''}
          onChangeText={(text) => setIncomeUpdate({ ...incomeUpdate, description: text } as Income)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
