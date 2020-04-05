import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {styles} from './Splash.styles';

const Splash = ({navigation}) => {
  const handleNextRoute = async () => {
    let nextRoute = 'App';
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
    <View style={styles.container}>
      <Text style={styles.text}>Vai Passar</Text>
    </View>
  );
};

export default Splash;
