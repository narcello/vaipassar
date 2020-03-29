import React from 'react';
import {OnBoarding, Splash} from '../screens';
import {createSwitchNavigator} from 'react-navigation';
import App from './app.routes';
import 'react-native-gesture-handler';

const RootNavigator = createSwitchNavigator(
  {
    App: () => <App />,
    OnBoarding: OnBoarding,
    Splash: Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default RootNavigator;
