import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import BottomNav from '../components/BottomNav';

const mockData = [
  { id: '1', title: '제목입니다.', author: '익명 1', content: '작성글 입니다.' },
  { id: '2', title: '제목입니다.', author: '익명 2', content: '작성글 입니다.' },
  { id: '3', title: '제목입니다.', author: '익명 3', content: '작성글 입니다.' },
  { id: '4', title: '제목입니다.', author: '익명 4', content: '작성글 입니다.' },
  { id: '5', title: '제목입니다.', author: '익명 5', content: '작성글 입니다.' },
  { id: '6', title: '제목입니다.', author: '익명 6', content: '작성글 입니다.' },
];

const FreeBoardScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.details}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.menuTitle}>자유 게시판</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="원하시는 게시글을 검색해보세요"
      />

      {/* List */}
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigation */}
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
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 10,
    textAlign: 'left',
  },
  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
    marginBottom: 15,
    alignSelf: 'center',
    width: '90%',
  },
  listContainer: {
    paddingBottom: 80, // Bottom navigation 공간 확보
  },
  itemContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
  },
  details: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  author: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  content: {
    fontSize: 12,
    color: '#888888',
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
