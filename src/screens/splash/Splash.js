import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation}) => {
  const closeSplash = () => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  };

  useEffect(closeSplash, []);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;
