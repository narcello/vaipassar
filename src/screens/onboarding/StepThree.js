import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './steps.styles';

const StepThree = ({goToApp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leia e compartilhe</Text>
      <Text style={styles.text}>mensagens positivas.</Text>
      <Text style={styles.text}>#VaiPassar.</Text>
      <TouchableOpacity style={styles.button} onPress={goToApp}>
        <Text style={styles.text}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepThree;
