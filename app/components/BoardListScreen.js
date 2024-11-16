// BoardListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoardListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>게시판 목록</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default BoardListScreen;
