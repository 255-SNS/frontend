import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav';


const FreeBoardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.menuTitle}>Taxi Blurr</Text>
      </View>
      
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  bottomNavContainer: {
    position: 'absolute', // BottomNav를 절대적으로 배치
    bottom: 0, // 화면 하단에 고정
    width: '100%', // 너비를 화면 전체로 설정
    height: 70, // BottomNav 높이와 일치
    backgroundColor: '#FFFFFF', // 하단 배경색 추가
  },
  
});

export default FreeBoardScreen;
