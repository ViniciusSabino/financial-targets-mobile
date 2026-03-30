import { StyleSheet } from 'react-native';

import { darkColors, fonts, fontSizes, spacing } from '@/shared/themes';

export const styles = StyleSheet.create({
  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.lg,
    paddingBottom: spacing.md,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
  textInputLabel: {
    color: darkColors.primary,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
  },
  textInput: {
    borderColor: darkColors.background,
    borderBottomWidth: 2,
    color: darkColors.textPrimary,
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
  },
});
