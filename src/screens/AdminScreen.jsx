import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PostList from '../components/PostList';

export default function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Panel</Text>
      <PostList admin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});
