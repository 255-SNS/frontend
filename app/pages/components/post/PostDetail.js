import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PostDetail = ({ post, onBack }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.menuTitle}>{post.title}</Text>
      <Text style={styles.postWriter}>{post.writer}</Text>
      <Text style={styles.postContent}>{post.content}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.listButton]} onPress={onBack}>
          <Text style={styles.buttonText}>목록으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    padding: 10,
    borderBottomWidth: 1.5,
    borderColor: '#C5D1D4',
  },
  postWriter: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1.5,
    borderColor: '#C5D1D4',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    padding: 10,
    height: 200,
  },
  buttonContainer: {
    alignItems: 'center', // 버튼을 가로 방향으로 가운데 정렬
    marginTop: 20,
  },
  listButton: {
    backgroundColor: '#C5D1D4', // 버튼 배경색
    padding: 15,
    borderRadius: 15,
    width: 200, // 버튼 너비 고정
    alignItems: 'center', // 버튼 내부 텍스트 중앙 정렬
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
 
    color: '#333',
  },
});

export default PostDetail;
