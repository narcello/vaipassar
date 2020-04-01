import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './steps.styles';

const SecondStep = ({goToApp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eles podem ser rápidos ou longos,</Text>
      <Text style={styles.text}>mas sempre passam.</Text>
      <Text style={styles.text}>#VaiPassar.</Text>
      <TouchableOpacity style={styles.button} onPress={goToApp}>
        <Text style={styles.text}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondStep;
