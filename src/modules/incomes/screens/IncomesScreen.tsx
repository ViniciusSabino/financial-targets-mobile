import { View } from 'react-native';

import { styles } from './IncomesScreen.styles';
import { EstimatedReleases } from '../components/EstimatedReleases/EstimatedReleases';
import { CurrentIncomes } from '../components/CurrentIncomes/CurrentIncomes';
import { Divider } from '@shared/components/Divider/Divider';

export function IncomesScreen() {
  return (
    <View style={styles.container}>
      <CurrentIncomes />
      <Divider />
      <EstimatedReleases />
    </View>
  );
}
