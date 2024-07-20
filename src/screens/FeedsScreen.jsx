import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FeedsScreen = ({ navigation }) => {
  const handleNewPost = () => {
    // Add logic to create a new post
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeds</Text>
      <Button title="Create New Post" onPress={handleNewPost} />
      <Button title="My Posts" onPress={() => navigation.navigate('MyPosts')} />
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

export default FeedsScreen;
