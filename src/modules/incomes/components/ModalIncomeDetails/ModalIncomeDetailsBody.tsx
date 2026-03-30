import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Switch, TextInput, Text, View } from 'react-native';

import { AmountUtil } from '@/shared/utils/amount.util';
import { styles } from './ModalIncomeDetailsBody.styles';
import { ModalIncomeDetailsBodyProps } from './ModalIncomeDetails.types';
import { darkColors } from '@/shared/themes';

export function ModalIncomeDetailsBody(props: ModalIncomeDetailsBodyProps) {
  const { currentIncome } = props;

  const [isReceived, setIsReceived] = useState(false);

  const toggleSwitchReceived = () => setIsReceived((previousState) => !previousState);

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
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Valor</Text>
        <TextInput
          placeholder="Valor"
          inputMode="decimal"
          style={styles.textInput}
          value={AmountUtil.formatAmount(currentIncome?.amount)}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Data</Text>
        <TextInput placeholder="Data" style={styles.textInput} value={currentIncome?.date} />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Conta</Text>
        <TextInput placeholder="Conta" style={styles.textInput} value={currentIncome?.accountName} />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textInputLabel}>Tipo</Text>
        <TextInput placeholder="Recorrência" style={styles.textInput} value={currentIncome?.recurrence} />
      </View>
      <View style={{ ...styles.inputArea }}>
        <Text style={styles.textInputLabel}>Descrição</Text>
        <TextInput
          multiline={true}
          placeholder="Descrição"
          style={styles.textInput}
          value={currentIncome?.description || ''}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
