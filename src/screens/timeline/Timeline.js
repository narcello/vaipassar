import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  RefreshControl,
  View,
  ActivityIndicator,
} from 'react-native';
import {postsMock} from './mock';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

const Timeline = ({navigation}) => {
  const [fetchingLatestPosts, setFetchingLatestPosts] = useState(false);
  const [fetchingOldestPosts, setFetchingOldestPosts] = useState(false);

  const fetchLatestPost = () => {
    // fetch from firestore
    setTimeout(() => {
      setFetchingLatestPosts(false);
    }, 2000);
  };

  const fetchOldestPost = () => {
    // fetch from firestore
    setFetchingOldestPosts(true);
    setTimeout(() => {
      setFetchingOldestPosts(false);
    }, 2000);
  };

  useEffect(fetchLatestPost, [fetchingLatestPosts]);

  const renderFooter = () => {
    if (!fetchingOldestPosts) {
      return null;
    } else {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        refreshControl={
          <RefreshControl
            colors={['red', 'green', 'pink', 'purple']}
            refreshing={fetchingLatestPosts}
            onRefresh={() => setFetchingLatestPosts(true)}
          />
        }
        onEndReached={fetchOldestPost}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        data={postsMock}
        renderItem={({item}) => <Post key={item.id} post={item} />}>
        <Button
          title="Ir para área de criar post"
          onPress={() => navigation.push('CreatePost')}
        />
        <Button
          title="Ir para tela de 'perfil'"
          onPress={() => navigation.push('AuthorArea')}
        />
      </FlatList>
    </SafeAreaView>
  );
};

export default Timeline;
