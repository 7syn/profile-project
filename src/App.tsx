import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import MainRoute from './routes/MainRoute';

const App = (): JSX.Element => {
  useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <MainRoute />
  );
}

export default App;
