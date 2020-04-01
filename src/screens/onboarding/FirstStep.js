import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './steps.styles';

const FirstStep = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sempre há momentos difíceis</Text>
    </View>
  );
};

export default FirstStep;
