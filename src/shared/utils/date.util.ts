export class DateUtil {
  static formatISODateToBR = (isoDate: string | null | undefined): string => {
    if (!isoDate) return '';

    const [, month, day] = isoDate.split('-');
    return `${day}/${month}`;
  };
}
