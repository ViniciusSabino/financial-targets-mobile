import { StyleSheet } from 'react-native';

import { ChartData } from '@/shared/components/PieChart/PieChart.types';
import { darkColors, fonts, fontSizes, spacing } from '@/shared/themes';

export const createStyle = (currentIncomeTypeChartData: ChartData | undefined) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      alignItems: 'center',
      backgroundColor: darkColors.highlight,
      borderRadius: 20,
      elevation: 5,
      height: '50%',
      width: '90%',
      shadowColor: darkColors.surface,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    header: {
      flexDirection: 'column',
      height: 70,
      width: '100%',
    },
    categoryHeader: {
      backgroundColor: currentIncomeTypeChartData?.color,
      height: 20,
    },
    categoryTextContent: {
      alignContent: 'center',
      flexDirection: 'row',
      gap: spacing.xs,
      justifyContent: 'center',
      paddingTop: spacing.sm,
    },
    categoryText: {
      color: darkColors.primary,
      fontSize: fontSizes.h3,
      fontFamily: fonts.regular,
      textTransform: 'uppercase',
    },
    body: {
      flex: 1,
    },
    button: {
      borderRadius: 20,
      padding: spacing.md,
    },
    buttonClose: {
      backgroundColor: darkColors.divider,
    },
    textStyle: {
      color: darkColors.primary,
      fontSize: fontSizes.body,
      fontFamily: fonts.bold,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    modalText: {
      textAlign: 'center',
    },
  });
