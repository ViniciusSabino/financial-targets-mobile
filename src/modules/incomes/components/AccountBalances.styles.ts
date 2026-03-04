import { StyleSheet } from 'react-native';

import { spacing, fontSizes, fonts, darkColors } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    //margin: spacing.xs,
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    color: darkColors.textPrimary,
    textAlign: 'center',
    margin: spacing.sm,
  },
  balanceListContainer: {
    alignItems: 'center',
  },
  accountBalanceItem: {
    marginVertical: spacing.xs,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingBottom: spacing.sm,
  },
  text: {
    color: darkColors.primary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
  },
});
