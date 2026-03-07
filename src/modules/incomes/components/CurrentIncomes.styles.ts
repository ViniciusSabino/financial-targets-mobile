import { StyleSheet } from 'react-native';

import { spacing, darkColors, fonts, fontSizes } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    color: darkColors.textPrimary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    margin: spacing.xs,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  headers: {
    flexDirection: 'row',
    gap: 100,
    justifyContent: 'center',
  },
  headerText: {
    color: darkColors.textSecondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
  },
  body: {
    flex: 1,
  },
  income: {
    backgroundColor: darkColors.surface,
    flexDirection: 'row',
    gap: spacing.xl,
    marginVertical: spacing.xs,
    paddingLeft: spacing.xs,
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
  },
  incomeInfo: {
    color: darkColors.textPrimary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
});
