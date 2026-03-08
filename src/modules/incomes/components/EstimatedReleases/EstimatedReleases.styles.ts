import { StyleSheet } from 'react-native';

import { spacing, darkColors, fonts, fontSizes } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  body: { flexDirection: 'row', flex: 1 },
  chartContainer: {
    flex: 1,
  },
  chartLegendContainer: {
    flex: 1,
  },
});
