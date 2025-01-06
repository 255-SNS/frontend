import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostDetail = ({ post, onBack }) => {
  const navigation = useNavigation();
 
  const [comments, setComments] = useState([]); // 댓글 목록 상태
  const [commentText, setCommentText] = useState(''); // 댓글 입력 상태

  const handleAddComment = () => {
    if (commentText.trim() === '') return; // 빈 댓글 방지

    setComments([...comments, { id: comments.length + 1, text: commentText }]);
    setCommentText(''); // 입력 필드 초기화
  };

  const handleGoBack = () => {
    navigation.navigate(previousScreen); // 이전 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.menuTitle}>{post.title || '게시글 제목 없음'}</Text>
        <Text style={styles.postWriter}>{post.writer || '작성자 정보 없음'}</Text>
        <Text style={styles.postContent}>{post.content || '게시글 내용이 없습니다.'}</Text>

        
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentItem}>
              <Text>익명</Text>
              <Text style={styles.commentText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.commentListContainer}
        />
      </View>

      {/* 댓글 입력란 */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="댓글을 입력하세요"
          value={commentText}
          onChangeText={setCommentText}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
          <Text style={styles.addButtonText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  postWriter: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    padding: 10,
    height: 200,
  },
  commentSection: {
    marginTop: 20,
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentItem: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    
    paddingVertical: 20, // 세로로 더 많은 여백 추가
    paddingHorizontal: 10, // 가로 여백 유지
   
    marginBottom: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
    marginBottom:100,
    paddingHorizontal: 20
  },
  commentInput: {
    flex: 1,
    
    backgroundColor: "#F6F6F6",
   
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 14,
    color: '#FFF',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  listButton: {
    backgroundColor: '#C5D1D4',
    padding: 15,
    borderRadius: 15,
    width: 200,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default PostDetail;



