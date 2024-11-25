import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const BoardWrite = ({ newPost, setNewPost, savePost, cancelPost }) => {
  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="제목을 입력하세요"
        value={newPost.title}
        onChangeText={(text) => setNewPost({ ...newPost, title: text })}
      />
      <TextInput
        style={[styles.input, { height: 200 }]}
        placeholder="내용을 입력하세요"
        value={newPost.content}
        onChangeText={(text) => setNewPost({ ...newPost, content: text })}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={savePost}>
          <Text style={styles.buttonText}>저장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={cancelPost}>
          <Text style={styles.buttonText}>취소</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // 버튼들을 가로로 가운데 정렬
    alignItems: 'center', // 버튼을 세로로 가운데 정렬
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10, // 버튼 간격 조정
    width: 100, // 버튼 크기 지정
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: '#C5D1D4', // 저장 버튼 배경색
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor: '#F4F7F8', // 취소 버튼 배경색
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BoardWrite;
