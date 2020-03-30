import React from 'react';
import {View, Text, Button} from 'react-native';

const CreatePost = ({navigation}) => {
  return (
    <View>
      <Text>Create post screen</Text>
      <Button
        title="Create post submit"
        onPress={() => navigation.navigate('Posts')}
      />
    </View>
  );
};

export default CreatePost;
