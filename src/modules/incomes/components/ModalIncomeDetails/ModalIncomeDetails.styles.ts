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
      flexDirection: 'column',
      elevation: 5,
      height: '45%',
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
      alignSelf: 'stretch',
      flexDirection: 'column',
      height: 80,
    },
    categoryColor: {
      backgroundColor: currentIncomeTypeChartData?.color,
      height: 10,
    },
    categoryTextContent: {
      alignContent: 'center',
      flexDirection: 'row',
      gap: spacing.xs,
      justifyContent: 'center',
      paddingTop: spacing.md,
    },
    categoryText: {
      color: darkColors.primary,
      fontSize: fontSizes.h3,
      fontFamily: fonts.regular,
      textTransform: 'uppercase',
    },
    body: {
      alignSelf: 'stretch',
      flex: 1,
    },
    footer: {
      alignSelf: 'stretch',
      flexDirection: 'row',
    },
    textSave: {
      color: darkColors.primary,
      fontFamily: fonts.regular,
      fontSize: fontSizes.body,
    },
    buttonSave: {
      backgroundColor: darkColors.background,
      flex: 1,
      justifyContent: 'center',
      paddingLeft: spacing.md,
    },
    buttonClose: {
      backgroundColor: '#3D2B2B',
      padding: spacing.sm,
    },
  });
