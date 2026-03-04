import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './IncomesFooter.styles';

export function IncomesFooter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Ionicons name="add-sharp" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
