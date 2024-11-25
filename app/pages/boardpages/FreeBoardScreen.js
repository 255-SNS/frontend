import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import BottomNav from '../components/BottomNav';
import BoardWrite from '../components/post/BoardWrite';
import PostDetail from '../components/post/PostDetail';

const FreeBoardScreen = () => {
  const [posts, setPosts] = useState([
    { id: '1', title: '첫 번째 게시글', writer: '익명1', content: '첫 번째 게시글 내용입니다.' },
    { id: '2', title: '두 번째 게시글', writer: '익명2', content: '두 번째 게시글 내용입니다.' },
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
                <Text style={styles.postTitle}>{item.title}</Text>
                {/* <Text style={styles.postWriter}>{item.writer}</Text> */}
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
    backgroundColor: '#F4F7F8',
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
    borderColor: '#C5D1D4',
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
    backgroundColor: '#F4F7F8',
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
    color: '#000',
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
