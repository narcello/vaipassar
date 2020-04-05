import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './steps.styles';

const StepTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>curtos ou longos,</Text>
      <Text style={styles.text}>mas sempre passam.</Text>
    </View>
  );
};

export default StepTwo;
