import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import BottomNav from '../components/BottomNav';

const FreeBoardScreen = () => {
  const [posts, setPosts] = useState([
    { id: '1', title: '첫 번째 게시글', content: '첫 번째 게시글 내용입니다.' },
    { id: '2', title: '두 번째 게시글', content: '두 번째 게시글 내용입니다.' },
  ]); // 초기 데이터 추가
  const [isCreating, setIsCreating] = useState(false); // 글 작성 화면 여부
  const [newPost, setNewPost] = useState({ title: '', content: '' }); // 새 글 상태
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 글 보기
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

  // 글 저장
  const savePost = () => {
    setPosts([...posts, { id: Date.now().toString(), ...newPost }]);
    setNewPost({ title: '', content: '' });
    setIsCreating(false); // 글 작성 화면 종료
  };

  // 글 상세보기로 이동
  const viewPost = (post) => {
    setSelectedPost(post);
  };

  // 글 상세보기에서 목록으로 돌아가기
  const goBackToList = () => {
    setSelectedPost(null);
  };

  // 검색 필터링 로직
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 게시글 목록 화면 */}
      {!isCreating && !selectedPost && (
        <View style={styles.content}>

          {/* 검색창 UI */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="원하시는 글을 검색해보세요"
              value={searchQuery}
              onChangeText={setSearchQuery} // 검색어 업데이트
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>🔍</Text>
            </TouchableOpacity>
          </View>
         
          <FlatList
            data={filteredPosts} // 검색된 게시글만 표시
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postItem}
                onPress={() => viewPost(item)}
              >
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postContentPreview}>
                  {item.content.slice(0, 20)}...
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingBottom: 100 }} // 아래쪽 여백 추가
          />
        </View>
      )}

      {/* 글 작성 화면 */}
      {isCreating && (
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="제목을 입력하세요"
            value={newPost.title}
            onChangeText={(text) =>
              setNewPost({ ...newPost, title: text })
            }
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="내용을 입력하세요"
            value={newPost.content}
            onChangeText={(text) =>
              setNewPost({ ...newPost, content: text })
            }
            multiline
          />
          <Button title="저장" onPress={savePost} />
          <Button title="취소" onPress={() => setIsCreating(false)} />
        </View>
      )}

      {/* 글 상세보기 화면 */}
      {selectedPost && (
        <View style={styles.content}>
          <Text style={styles.menuTitle}>{selectedPost.title}</Text>
          <Text style={styles.postContent}>{selectedPost.content}</Text>
          <Button title="목록으로 돌아가기" onPress={goBackToList} />
        </View>
      )}

      {/* 작성하기 버튼 */}
      {!isCreating && !selectedPost && (
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setIsCreating(true)}
        >
          <Text style={styles.createButtonText}>글 작성하기</Text>
        </TouchableOpacity>
      )}

      {/* 하단 네비게이션 바 */}
      <View style={styles.bottomNavContainer}>
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F4F7F8',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 55,
    marginTop: 20
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    marginLeft: 10,
    padding: 5,
  },
  searchButtonText: {
    fontSize: 18,
    color: '#F4F7F8',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  postItem: {
    padding: 15,
    borderBottomWidth: 1.5,
    borderColor: '#C5D1D4',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:10
  },
  postContentPreview: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  createButton: {
    position: 'absolute', // 버튼을 화면 위에 고정
    bottom: 100, // 하단 네비게이션 위에 위치
    right: 150, // 화면 오른쪽에서 살짝 떨어지도록 조정
    backgroundColor: '#F4F7F8',
    padding: 15,
    borderRadius: 50, // 동그란 버튼 모양
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // 그림자 추가
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // 안드로이드 그림자
  
  },
  createButtonText: {
    color: '#000',
    fontSize: 16,
   
  },
  postContent: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
  },
});

export default FreeBoardScreen;
