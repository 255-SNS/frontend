import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import BottomNav from './components/BottomNav';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  const userName = '김이오';
  const userPoint = 225;

  const [bounceAnimation] = useState(new Animated.Value(0)); // 애니메이션 값

  useEffect(() => {
    // 상하 반복 애니메이션 설정
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: -10, // 위로 이동
          duration: 2000, // 2초 동안 이동
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 10, // 아래로 이동
          duration: 2000, // 2초 동안 이동
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: -0.5, // 위로 이동
          duration: 1100, // 2초 동안 이동
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const animatedStyle = {
    transform: [
      {
        translateY: bounceAnimation, // 상하 이동 애니메이션
      },
    ],
  };

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
        {/* 말풍선 애니메이션 */}
        <Animated.View style={animatedStyle}>
          <Image source={require('../assets/img/object/green.png')} style={styles.heartImage} />
        </Animated.View>
        {/* 캐릭터 애니메이션 */}
        <Animated.View style={animatedStyle}>
          <Image source={require('../assets/img/zero.png')} style={styles.characterImage} />
        </Animated.View>
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
    top: 20, // 높이를 상단에 가깝게 설정
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    marginTop: -30,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
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
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default MainScreen;
