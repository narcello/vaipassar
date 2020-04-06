import React from 'react';
import {View, Text} from 'react-native';
import Reaction from '../Reactions/Reaction';
import {styles} from './Post.styles';
import Options from '../Options/Options';

const options = [
  {
    title: 'Denunciar post',
    onPress: () => {},
  },
];

const Post = ({post}) => {
  const {message, reactions} = post;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Options options={options} style={styles.options} />
        <Text style={styles.textArea}>{message}</Text>
      </View>
      <Reaction reactions={reactions} />
    </View>
  );
};

export default Post;
