import React from 'react';
import {View, Text} from 'react-native';
import Reaction from '../reaction/Reaction';
import {styles} from './Post.styles';

const Post = ({post}) => {
  const {message, reactions} = post;
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text>{message}</Text>
      </View>
      <Reaction reactions={reactions} />
    </View>
  );
};

export default Post;
