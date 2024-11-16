import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNav from './components/BottomNav'; // BottomNav import
import { useNavigation } from '@react-navigation/native';

const BoardListScreen = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  // 메뉴 데이터
  const menuItems = [
    { id: 1, title: '자유 게시판', icon: '📋', description: 'Nothing found. try a more general search phrase.' },
    { id: 2, title: '졸업생 게시판', icon: '🎓', description: 'Nothing found. try a more general search phrase.' },
    { id: 3, title: '취업 게시판', icon: '🏢', description: 'Nothing found. try a more general search phrase.' },
    { id: 4, title: 'Taxi Blurr', icon: '🚕', description: 'Nothing found. try a more general search phrase.' },
    { id: 5, title: '서점', icon: '📚', description: 'Nothing found. try a more general search phrase.' },
  ];

  return (
    <View style={styles.container}>
      {/* 메뉴 리스트 */}
      <View style={styles.content}>
        <Text style={styles.menuTitle}>Menu</Text>
        {menuItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.menuItem}
            onPress={() => {
              if (item.title === '자유 게시판') {
                navigation.navigate('FreeBoard');
              } else if (item.title === '졸업생 게시판') {
                navigation.navigate('GraduateBoard')
              } else if (item.title === '취업 게시판') {
                navigation.navigate('JobBoard')
              } else if (item.title === 'Taxi Blurr') {
                navigation.navigate('TaxiBoard')
              } else if (item.title === '서점') {
                navigation.navigate('BookstoreBoard')
              } 
            }}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.menuTitleText}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* 하단 네비게이션 바 */}
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20, // 메뉴 리스트에만 패딩 적용
    paddingTop: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 20,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#F4F7F8',
    borderRadius: 20,
    padding: 25,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Android 그림자 효과
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  menuTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 12,
    color: '#666666',
  },
});

export default BoardListScreen;
