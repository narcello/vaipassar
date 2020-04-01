import React from 'react';
import {Splash} from '../screens';
import {createSwitchNavigator} from 'react-navigation';
import App from './app.routes';
import OnBoarding from './onboarding/onboarding.routes';
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
