import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomNav from './components/BottomNav'; // 하단 네비게이션 바 import
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const userName = '이이오'; // 사용자 이름
  const userPoint = 225; // 사용자 포인트

  return (
    <View style={styles.container}>
      {/* 상단 컨테이너 */}
      <ImageBackground source={require('../assets/img/object/background.png')} style={styles.topContainer}>
        {/* 포인트 정보 박스 */}
        <View style={styles.pointBox}>
          <Text style={styles.pointText}>
            {userName}님의 point : {userPoint}
          </Text>
        </View>
        <Image source={require('../assets/img/object/green.png')} style={styles.heartImage} />
        <Image source={require('../assets/img/zero.png')} style={styles.characterImage} />
      </ImageBackground>

      {/* 스크롤 가능한 하단 컨테이너 */}
      <View style={styles.bottomContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.servicesTitle}>255 services</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BoardList')}>
            <Text style={styles.buttonText}>게시판 바로가기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>게임 출석하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InfoBoard')} style={styles.button}>
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
  pointBox: {
    position: 'absolute',
    top: 20, // 높이를 상단에 가깝게 복구
    alignSelf: 'center', // 박스가 화면 중앙에 위치하도록 설정
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 반투명 흰색
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  pointText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
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
    backgroundColor: '#000',
    borderColor: '#9D9D9D',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000', // 그림자 색상
    shadowOpacity: 0.2, // 그림자 투명도
    shadowRadius: 8, // 그림자 퍼짐 정도
    shadowOffset: { width: 0, height: 4 }, // 그림자 위치
    elevation: 5, // Android 그림자 효과
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default MainScreen;
