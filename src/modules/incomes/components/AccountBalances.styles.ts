import { StyleSheet } from 'react-native';

import { spacing, fontSizes, fonts, darkColors } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    rowGap: spacing.xxs,
    paddingTop: spacing.sm,
  },
  header: {
    alignItems: 'center',
    columnGap: spacing.xxs,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: darkColors.textPrimary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    margin: spacing.sm,
    textTransform: 'uppercase',
  },
  icons: {
    color: darkColors.primary,
    fontSize: fontSizes.h2,
  },
  body: {
    alignItems: 'center',
  },
  balance: {
    alignItems: 'flex-start',
    marginVertical: spacing.xxs,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    paddingBottom: spacing.sm,
  },
  balanceInfo: {
    color: darkColors.primary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
  },
  footer: {
    alignItems: 'center',
  },
  footerInfo: {
    color: darkColors.textSecondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    textTransform: 'uppercase',
  },
});
