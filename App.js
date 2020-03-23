/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {StatusBar, Button, Dimensions, View} from 'react-native';
import {
  createPost,
  deletePost,
  favorPost,
  disfavorPost,
  banPost,
  reactPost,
  registerUser,
} from './src/db/soa';

const App = () => {
  useEffect(() => {
    registerUser();
  }, []);

  const postIdTest = '4fzmz5NtAXm49x2BPH1r';

  const handlePressCreatePost = async () => {
    try {
      await createPost('Test create post');
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressDeletePost = async () => {
    try {
      await deletePost(postIdTest);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressFavorPost = async () => {
    try {
      await favorPost(postIdTest);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressDisfavorPost = async () => {
    try {
      await disfavorPost(postIdTest);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressBanPost = async () => {
    try {
      await banPost(postIdTest);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePressReactPost = async () => {
    try {
      await reactPost(postIdTest, 'heart');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: Dimensions.get('window').height,
        }}>
        <Button title="Create post" onPress={handlePressCreatePost} />
        <Button title="Delete post" onPress={handlePressDeletePost} />
        <Button title="Favor post" onPress={handlePressFavorPost} />
        <Button title="Disfavor post" onPress={handlePressDisfavorPost} />
        <Button title="Ban post" onPress={handlePressBanPost} />
        <Button title="React post" onPress={handlePressReactPost} />
      </View>
    </>
  );
};

export default App;
