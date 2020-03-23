/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState, useCallback} from 'react';
import {StatusBar, Button, Dimensions, View, Text} from 'react-native';
import {
  createPost,
  deletePost,
  favorPost,
  disfavorPost,
  banPost,
  reactPost,
  registerUser,
} from './src/db/soa';
import {PostsByAuthor} from './src/db/query';

const App = () => {
  const postIdTest = '4fzmz5NtAXm49x2BPH1r';

  const postByAuthorRef = new PostsByAuthor();
  const [postsByAuthor, setPostsByAuthor] = useState([]);

  useEffect(() => {
    registerUser();
    fetchPosts();
  }, [fetchPosts]);

  const fetchPosts = useCallback(async () => {
    const docs = await postByAuthorRef.get();
    setPostsByAuthor(docs);
  }, [postByAuthorRef]);

  const fetchMorePosts = async () => {
    const docs = await postByAuthorRef.fetchMore();
    setPostsByAuthor([...postsByAuthor, ...docs]);
  };

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
        <View>
          {postsByAuthor.map(post => {
            return <Text>{post.data().message}</Text>;
          })}
        </View>
        <Button title="Fetch more posts" onPress={fetchMorePosts} />
        {/* <Button title="Delete post" onPress={handlePressDeletePost} />
        <Button title="Favor post" onPress={handlePressFavorPost} />
        <Button title="Disfavor post" onPress={handlePressDisfavorPost} />
        <Button title="Ban post" onPress={handlePressBanPost} />
        <Button title="React post" onPress={handlePressReactPost} /> */}
      </View>
    </>
  );
};

export default App;
