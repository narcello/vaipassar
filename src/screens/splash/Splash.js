import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';

const Splash = ({navigation}) => {
  const handleNextRoute = async () => {
    let nextRoute = 'OnBoarding';
    const alreadySawOnboarding = await AsyncStorage.getItem(
      '@vaipassar.alreadySawOnboarding',
    );
    if (!alreadySawOnboarding) {
      nextRoute = 'OnBoarding';
      AsyncStorage.setItem('@vaipassar.alreadySawOnboarding', 'true');
    }
    setTimeout(() => {
      navigation.navigate(nextRoute);
    }, 5000);
  };
  handleNextRoute();

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
