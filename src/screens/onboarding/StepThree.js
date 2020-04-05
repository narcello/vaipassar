import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './steps.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../styles/colors';

const StepThree = ({goToApp}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToApp} style={styles.close}>
        <Icon name="close" size={30} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.text}>Leia e compartilhe</Text>
      <Text style={styles.text}>mensagens positivas.</Text>
      <Text style={styles.text}>#VaiPassar.</Text>
    </View>
  );
};

export default StepThree;
