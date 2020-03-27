import React from 'react';
import {View, Text} from 'react-native';
import Reaction from '../reaction/Reaction';

const Post = ({post}) => {
  const {message, reactions} = post;
  return (
    <View
      style={{borderColor: 'gray', borderWidth: 1, padding: 5, marginTop: 100}}>
      <Text>{message}</Text>
      <Reaction reactions={reactions} />
    </View>
  );
};

export default Post;
