import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function PostForm() {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Handle post submission logic here
    setContent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write something..."
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8 },
});
