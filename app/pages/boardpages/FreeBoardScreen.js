import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import BottomNav from '../components/BottomNav';
import BoardWrite from '../components/post/BoardWrite';
import PostDetail from '../components/post/PostDetail';

const FreeBoardScreen = () => {
  const [posts, setPosts] = useState([
    { id: '1', title: '기말', writer: '익명', content: '기말고사가 2주밖에 안남았어?? 말도 안돼' },
    { id: '2', title: '방학', writer: '익명', content: '방학때 뭐하지?? 자격증 vs 취업 부캠 추천 ㄱㄱ' },
    { id: '1', title: '연애', writer: '익명', content: '크리스마스때 어디가지?? 너무 재밌겠다 ㅎ' },
    { id: '2', title: '일본 여행', writer: '익명', content: '일본여행가고 싶은데 너무 비싸다ㅜㅜ' },
    { id: '1', title: '저메추', writer: '익명', content: '저녁메뉴 추천좀 마라탕먹을까 치킨먹을까 고민된다 히히' },
    { id: '2', title: '친구랑 싸움', writer: '익명2', content: '아까 친구랑 젤리가지고 싸웠는데.. 진짜 치사하다!' },
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const savePost = () => {
    setPosts([...posts, { id: Date.now().toString(), ...newPost }]);
    setNewPost({ title: '', writer: '', content: '' });
    setIsCreating(false);
  };

  const cancelPost = () => {
    setNewPost({ title: '', content: '' });
    setIsCreating(false);
  };

  const viewPost = (post) => {
    setSelectedPost(post);
  };

  const goBackToList = () => {
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {!isCreating && !selectedPost && (
        <View style={styles.content}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="원하시는 글을 검색해보세요"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>🔍</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={filteredPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.postItem}
                onPress={() => viewPost(item)}
              >
                <View style={styles.titleAndCompanyContainer}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <Text style={styles.postWriter}>{item.writer}</Text>
                </View>
                <Text style={styles.postContentPreview}>
                  {item.content.slice(0, 20)}...
                </Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </View>
      )}

      {isCreating && (
        <BoardWrite
          newPost={newPost}
          setNewPost={setNewPost}
          savePost={savePost}
          cancelPost={cancelPost}
        />
      )}

      {selectedPost && (
        <PostDetail post={selectedPost} onBack={goBackToList} />
      )}
      
      {!isCreating && !selectedPost && (
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => setIsCreating(true)}
        >
          <Text style={styles.createButtonText}>글 작성하기</Text>
        </TouchableOpacity>
      )}

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
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 55,
    marginTop: 20,
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
  
  postItem: {
    padding: 15,
    borderBottomWidth: 1.5,
    borderColor: '#000',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  
  postContentPreview: {
    fontSize: 14,
    color: '#666',
    
  },
  createButton: {
    position: 'absolute',
    bottom: 100,
    right: 150,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  titleAndCompanyContainer: {
    flexDirection: 'row', // 제목과 회사를 같은 줄에 배치
    justifyContent: 'space-between', // 제목과 회사가 양 끝에 위치
    alignItems: 'center', // 세로 방향으로 가운데 정렬
    marginBottom: 5, // 제목/회사와 내용 미리보기 간격
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
  },
  postWriter: {
    fontSize: 16,
    color: '#666',
   
    textAlign: 'right', // 회사명을 오른쪽 정렬
  }
});

export default FreeBoardScreen;
