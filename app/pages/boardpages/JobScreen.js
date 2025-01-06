import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import BottomNav from '../components/BottomNav';
import JobWrite from '../components/post/JobWrite';
import PostDetail from '../components/post/PostDetail';
import JobDetail from '../components/post/JobDetail';

const FreeBoardScreen = () => {
  const [posts, setPosts] = useState([
    { id: '1', title: '삼성 꿀팁', company: '삼성 전자', writer: '익명1', content: '삼성전자 코딩테스트 대비 꿀팁 전수해드립니다. 연락주세요' },
    { id: '2', title: 'LG CNS', company: 'LG CNS', writer: '익명2', content: '워라벨 좋습니다' },
    { id: '1', title: '이직', company: '컴퍼니', writer: '익명1', content: '대기업으로 이직하고싶은데 쉽지 않네요' },
    { id: '2', title: 'AI', company: 'CJ 올리브영', writer: '익명2', content: '백엔드하다가 AI분야로 넘어가려고 하는데 대학원가야할까요??' },
    { id: '1', title: '공기업', company: '서울교통공사', writer: '익명1', content: '다 좋은데 공기업은 월급이 너무 적네요..' },
    { id: '2', title: '취업 꿀팁', company: 'SK hynix', writer: '익명2', content: '취업 잘할려면 성실해야해요.' },
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
                {/* 제목과 회사 같은 줄에 배치 */}
                <View style={styles.titleAndCompanyContainer}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <Text style={styles.postCompany}>{item.company}</Text>
                </View>
                {/* 내용 미리보기 */}
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
        <JobWrite
          newPost={newPost}
          setNewPost={setNewPost}
          savePost={savePost}
          cancelPost={cancelPost}
        />
      )}

      {selectedPost && (
        <JobDetail post={selectedPost} onBack={goBackToList} />
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
  titleAndCompanyContainer: {
    flexDirection: 'row', // 제목과 회사를 같은 줄에 배치
    justifyContent: 'space-between', // 제목과 회사가 양 끝에 위치
    alignItems: 'center', // 세로 방향으로 가운데 정렬
    marginBottom: 5, // 제목/회사와 내용 미리보기 간격
   
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
    marginBottom: 8,
    flex: 1, // 제목이 남는 공간을 차지
  },
  postCompany: {
    fontSize: 16,
    color: '#666',
   
    textAlign: 'right', // 회사명을 오른쪽 정렬
  },
  
  postContentPreview: {
    fontSize: 14,
    color: '#666',
    marginTop: 5, // 본문 미리보기와 제목/회사의 간격
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

  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
  },
});

export default FreeBoardScreen;
