import { StyleSheet } from 'react-native';

import { spacing, darkColors } from '@/shared/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 40,
    backgroundColor: 'pink',
  },
  touchable: {
    backgroundColor: darkColors.surface,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  icon: {
    color: darkColors.textPrimary,
  },
});
