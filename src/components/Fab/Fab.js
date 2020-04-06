import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './Fab.styles';

const Fab = ({callback}) => {
  return (
    <TouchableOpacity onPress={callback} style={styles.container}>
      <Text style={styles.content}>+</Text>
    </TouchableOpacity>
  );
};

export default Fab;
