import React from 'react';
import {Text} from 'react-native';

function OnBoarding({navigation}) {
  return <Text onPress={() => navigation.navigate('App')}>OnBoarding</Text>;
}

export default OnBoarding;
