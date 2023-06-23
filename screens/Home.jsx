import { ActivityIndicator, Alert, FlatList, RefreshControl, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../components/Post';
import { FullPost } from './FullPost';

export const Home = ({ navigation }) => {

  const [items, setItems] = useState();
  const [isLoading, setIsLaoding] = useState(true);

  const fetchPosts = () => {
    setIsLaoding(true);
    axios.get('https://6495e200b08e17c91792d0c3.mockapi.io/articles')
      .then(({ data }) => setItems(data))
      .catch(e => {
        alert("Error postst fetching");
      })
      .finally(() => {
        setIsLaoding(false);
      })
  }
  useEffect(fetchPosts, [])

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large"></ActivityIndicator>
        <Text style={{ marginTop: 15 }}>Loading...</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.name })} >
            <Post title={item.name} date={item.createdAt} imgSource={item.avatar} />
          </TouchableOpacity>
        )}
      >

      </FlatList>
      <StatusBar theme="auto" />
    </View>
  );
}