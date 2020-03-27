import React from 'react';
import {View, Text} from 'react-native';
import Reaction from '../reaction/Reaction';

const Post = ({post}) => {
  const {message, reactions} = post;
  return (
    <View>
      <Text>{message}</Text>
      <Reaction reactions={reactions} />
    </View>
  );
};

export default Post;
