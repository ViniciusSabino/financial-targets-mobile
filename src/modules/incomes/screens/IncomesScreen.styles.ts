import { darkColors } from '@/shared/themes';
import { StyleSheet } from 'react-native';

export const createStyle = (modalIncomeVisible: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: modalIncomeVisible ? darkColors.background : '',
      opacity: modalIncomeVisible ? 0.1 : 1,
    },
  });
