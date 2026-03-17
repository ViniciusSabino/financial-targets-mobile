import { StyleSheet } from 'react-native';

import { spacing, darkColors, fonts, fontSizes } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: spacing.sm,
  },
  title: {
    color: darkColors.textPrimary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.body,
    margin: spacing.xs,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  totalText: {
    color: darkColors.textSecondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.h3,
    margin: spacing.xs,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  chartContainer: {
    alignItems: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingBottom: spacing.sm,
  },
  legendColorBody: {
    alignItems: 'center',
    backgroundColor: darkColors.highlight,
    flex: 1,
  },
  legendPercentageBody: {
    backgroundColor: darkColors.highlight,
    flex: 1,
  },
  legendItemBody: {
    backgroundColor: darkColors.highlight,
    flex: 2,
  },
  legendText: {
    color: darkColors.primary,
    fontSize: fontSizes.body,
    paddingTop: spacing.xs,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
  },
});
