import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FabStyles} from './Fab.styles';

const Fab = ({callback}) => {
  return (
    <TouchableOpacity onPress={callback} style={FabStyles.container}>
      <Text style={FabStyles.content}>+</Text>
    </TouchableOpacity>
  );
};

export default Fab;
