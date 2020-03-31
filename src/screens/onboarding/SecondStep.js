import React from 'react';
import {View, Text, Button} from 'react-native';

const SecondStep = ({goToApp}) => {
  return (
    <View>
      <Button onPress={goToApp} title="entrar" />
      <Text>SecondStep</Text>
    </View>
  );
};

export default SecondStep;
