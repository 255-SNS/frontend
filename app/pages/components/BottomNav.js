import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ResumeScreen')}>
        <Text style={styles.navIcon}>📋</Text>
        <Text style={styles.navText}>자소서</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={styles.navIcon}>👤</Text>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 70, // 네비게이션 바 높이 설정
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24, // 아이콘 크기
    marginBottom: 4, // 아이콘과 텍스트 간격
  },
  navText: {
    fontSize: 12, // 텍스트 크기
    color: '#333333', // 텍스트 색상
  },
});

export default BottomNav;
