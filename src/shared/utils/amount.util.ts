import Decimal from 'decimal.js';

export class AmountUtil {
  static formatAmount = (amount: number | null | undefined): string => {
    if (amount == null) return 'R$ 0,00';

    const decimal = new Decimal(amount);

    const adjustedAmount = decimal.toDecimalPlaces(2, Decimal.ROUND_HALF_UP);
    const formatted = adjustedAmount.toString();

    const [integerPart, decimalPart] = formatted.split('.');

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `R$ ${formattedInteger},${decimalPart || '00'}`;
  };
}
