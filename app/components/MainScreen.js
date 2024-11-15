import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();
  
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, { toValue: 1, duration: 1000, useNativeDriver: false }),
        Animated.timing(colorAnim, { toValue: 2, duration: 1000, useNativeDriver: false }),
        Animated.timing(colorAnim, { toValue: 0, duration: 1000, useNativeDriver: false }),
      ])
    ).start();
  }, [colorAnim]);

  const interpolatedColor = colorAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['#FF0000', '#00FF00', '#0000FF']
  });

  return (
    <View style={styles.container}>
      {/* 상단 컨테이너 */}
      <ImageBackground source={require('../assets/img/background.png')} style={styles.topContainer}>        
        <Text style={styles.pointText}>point</Text>
        <Animated.View style={[styles.heart, { backgroundColor: interpolatedColor }]} />
        <Image source={require('../assets/img/zero.png')} style={styles.characterImage} />
      </ImageBackground>

      {/* 하단 컨테이너 */}
      <View style={styles.bottomContainer}>
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

        {/* 하단 네비게이션 바 */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>🏠</Text>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>📋</Text>
            <Text>자소서</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navIcon}>👤</Text>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flex: 1.5, // 상단 부분을 조금 더 크게
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    marginTop: -30, // 위쪽과 살짝 겹쳐지도록 설정
    width: '100%', // 화면 전체 너비를 차지하도록 설정
  },
  pointText: {
    fontSize: 16,
    color: '#FFFFFF',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  heart: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B9B9B',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#9D9D9D',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonBlue: {
    backgroundColor: 'rgba(133, 186, 255, 0.31)',
  },
  buttonGreen: {
    backgroundColor: 'rgba(150, 243, 187, 0.26)',
  },
  buttonRed: {
    backgroundColor: 'rgba(255, 177, 177, 0.3)',
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    marginTop: 20, // 하단 네비게이션이 버튼 아래에 배치되도록 여백 추가
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default MainScreen;

