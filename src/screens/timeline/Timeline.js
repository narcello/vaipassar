import React, {useState, useRef, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  RefreshControl,
  View,
  ActivityIndicator,
} from 'react-native';
import {Post} from '../../components';
import {FlatList} from 'react-native-gesture-handler';
import {AllPosts} from '../../db/query';

const Timeline = ({navigation}) => {
  const _AllPosts = useRef(new AllPosts());
  const [postList, setPostList] = useState([]);
  const [fetchingLatestPosts, setFetchingLatestPosts] = useState(false);
  const [fetchingOldestPosts, setFetchingOldestPosts] = useState(false);

  useEffect(() => {
    const initialFetch = async () => {
      const posts = await _AllPosts.current.get();
      setPostList(posts);
    };
    initialFetch();
  }, []);

  const fetchLatestPost = () => {
    // fetch from firestore
    setFetchingLatestPosts(true);
    setTimeout(() => {
      setFetchingLatestPosts(false);
    }, 2000);
  };

  const fetchOldestPost = async () => {
    // fetch from firestore
    setFetchingOldestPosts(true);
    try {
      const oldestPosts = await _AllPosts.current.fetchMore();
      setPostList([...postList, ...oldestPosts]);
      setFetchingOldestPosts(false);
    } catch (error) {}
  };

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
            onRefresh={fetchLatestPost}
          />
        }
        onEndReached={fetchOldestPost}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        data={postList}
        renderItem={({item}) => <Post key={item.id} post={item} />}
      />
      <Button
        title="Ir para área de criar post"
        onPress={() => navigation.push('CreatePost')}
      />
      <Button
        title="Ir para tela de 'perfil'"
        onPress={() => navigation.push('AuthorArea')}
      />
    </SafeAreaView>
  );
};

export default Timeline;
