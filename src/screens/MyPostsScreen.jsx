import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyPostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Posts</Text>
      {/* Add logic to show user's posts */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default MyPostsScreen;
