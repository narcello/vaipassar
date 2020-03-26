import React from 'react';
import {View, Text, Button} from 'react-native';

const Timeline = ({navigation}) => {
  return (
    <View>
      <Text>Timeline</Text>
      <Button
        title="Ir para área de criar post"
        onPress={() => navigation.push('CreatePost')}
      />
      <Button
        title="Ir para tela de 'perfil'"
        onPress={() => navigation.push('AuthorArea')}
      />
    </View>
  );
};

export default Timeline;
