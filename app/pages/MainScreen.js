import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomNav from './components/BottomNav'; // 하단 네비게이션 바 import
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  // 원하는 색상을 여기에 설정
  const color = 'green'; // 'red', 'green', or 'blue'

  // 선택된 색상에 따라 하트 이미지를 반환
  const getHeartImage = () => {
    switch (color) {
      case 'red':
        return require('../assets/img/object/red.png');
      case 'green':
        return require('../assets/img/object/green.png');
      case 'blue':
        return require('../assets/img/object/blue.png');
      default:
        return require('../assets/img/object/red.png');
    }
  };

  return (
    <View style={styles.container}>
      {/* 상단 컨테이너 */}
      <ImageBackground source={require('../assets/img/object/background.png')} style={styles.topContainer}>
        <View style={styles.overlay}>
          <Text style={styles.pointText}>point</Text>
          <TouchableOpacity style={styles.notification}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>
        <Image source={getHeartImage()} style={styles.heartImage} />
        <Image source={require('../assets/img/zero.png')} style={styles.characterImage} />
      </ImageBackground>

      {/* 스크롤 가능한 하단 컨테이너 */}
      <View style={styles.bottomContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.servicesTitle}>255 services</Text>
          <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => navigation.navigate('BoardList')}>
            <Text style={styles.buttonText}>게시판 바로가기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGreen]}>
            <Text style={styles.buttonText}>게임 출석하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonRed]}>
            <Text style={styles.buttonText}>정보대 소식 확인하기</Text>
          </TouchableOpacity>
        </ScrollView>
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
  topContainer: {
    flex: 2, // 상단 부분을 더 크게 설정
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // 투명한 검정색
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pointText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  heartImage: {
    width: 100,
    height: 80,
    marginBottom: 10,
  },
  characterImage: {
    width: 250,
    height: 130,
    marginVertical: 10,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    marginTop: -30, // 위쪽과 살짝 겹쳐지도록 설정
    width: '100%', // 화면 전체 너비를 차지하도록 설정
  },
  scrollContent: {
    alignItems: 'center', // 버튼들이 가운데 정렬되도록 설정
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B9B9B',
    marginBottom: 20,
  },
  button: {
    width: 300,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#9D9D9D',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000', // 그림자 색상
    shadowOpacity: 0.2, // 그림자 투명도
    shadowRadius: 8, // 그림자 퍼짐 정도
    shadowOffset: { width: 0, height: 4 }, // 그림자 위치
    elevation: 5, // Android 그림자 효과
  },
  buttonBlue: {
    backgroundColor: '#E5E9EF',
  },
  buttonGreen: {
    backgroundColor: '#E1F4E9',
  },
  buttonRed: {
    backgroundColor: '#F6E7E7',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default MainScreen;
