import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';

import { RootNavigator } from './navigation/RootNavigator';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hide();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return <RootNavigator></RootNavigator>;
}
