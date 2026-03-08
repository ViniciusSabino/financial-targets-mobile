import { darkColors, fontSizes } from '@/shared/themes';
import { PieChartConfig } from './PieChart.types';

const chartColors: Array<string> = [
  '#193336',
  '#19361F',
  '#363219',
  '#361919',
  '#361933',
  '#561414',
  '#143156',
  '#145645',

  '#1F3E41',
  '#214226',
  '#423E1F',
  '#421F1F',
  '#421F40',
  '#661919',
  '#1A3B66',
  '#1A6652',

  '#22484B',
  '#284D2D',
  '#4E4A24',
  '#4E2424',
  '#4E244C',
  '#761E1E',
  '#204576',
  '#20765F',

  '#255255',
  '#2F5834',
  '#5A5629',
  '#5A2929',
  '#5A2958',
  '#862323',
  '#264F86',
  '#26866C',

  '#2A5F60',
  '#35633B',
  '#66622E',
  '#662E2E',
  '#662E65',
  '#962828',
  '#2C5996',
  '#2C9679',

  '#2A2F5A',
  '#33386A',
  '#3C417A',
  '#454A8A',
  '#4E539A',

  '#2F4F2F',
  '#3A5C3A',
  '#456945',
  '#507650',
  '#5B835B',
];

const chartDefaultConfig: PieChartConfig = {
  legendFontColor: darkColors.primary,
  legendFontSize: fontSizes.body,
};

export { chartColors, chartDefaultConfig };
