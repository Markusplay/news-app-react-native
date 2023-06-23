import { ActivityIndicator, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../components/Post';
import styled from 'styled-components/native';

export const FullPost = ({ route, navigation }) => {

    const [item, setItem] = useState();
    const [isLoading, setIsLaoding] = useState(true);
    const { id, title } = route.params;

    const fetchPosts = () => {
        navigation.setOptions({
            title
        })
        setIsLaoding(true);
        axios.get(`https://6495e200b08e17c91792d0c3.mockapi.io/articles/${id}`)
            .then(({ data }) => setItem(data))
            .catch(e => {
                alert("Error posts fetching");
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
            <Post title={item.name} date={item.createdAt} imgSource={item.avatar} />
            <Text>{title}</Text>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, deserunt itaque labore, veniam laborum ex ipsa facilis voluptatem natus nemo voluptatum debitis odio quam nobis tempora dicta inventore eum ad.</Text>
        </View>
    );
}