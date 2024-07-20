import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const mockPosts = [
  { id: '1', content: 'Post 1', approved: true, myPost: true },
  { id: '2', content: 'Post 2', approved: true, myPost: false },
  { id: '3', content: 'Post 3', approved: false, myPost: true },
];

export default function PostList({ myPosts, admin }) {
  const [posts, setPosts] = useState(mockPosts);

  const handleApprove = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, approved: true } : post));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post => (myPosts ? post.myPost : post.approved || admin));

  return (
    <FlatList
      data={filteredPosts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <Text>{item.content}</Text>
          {admin && !item.approved && (
            <View style={styles.adminActions}>
              <Button title="Approve" onPress={() => handleApprove(item.id)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          )}
          {admin && item.approved && (
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  post: { padding: 16, borderBottomWidth: 1 },
  adminActions: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
});
