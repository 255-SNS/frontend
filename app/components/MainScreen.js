import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const MainScreen = () => {
  const colorAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 2,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const interpolatedColor = colorAnimation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['red', 'green', 'blue'],
  });

  return (
    <View style={styles.container}>
      {/* 상단 회색 배경 부분 */}
      <View style={styles.topSection}>
        <View style={styles.header}>
          <Text style={styles.pointText}>point</Text>
          <View style={styles.icons}>
            <Image source={require('../assets/img/zero.png')} style={styles.icon} />
            <Image source={require('../assets/img/zero.png')} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.title}>Red Win</Text>
        <Animated.View style={[styles.heart, { backgroundColor: interpolatedColor }]} />
        <Image source={require('../assets/img/zero.png')} style={styles.image} />
      </View>

      {/* 중간 콘텐츠 부분 */}
      <View style={styles.middleSection}>
        <Text style={styles.subtitle}>255 services</Text>
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.button1]}>
            <Text style={styles.buttonText}>게시판 바로가기</Text>
          </View>
          <View style={[styles.button, styles.button2]}>
            <Text style={styles.buttonText}>게임 출석하기</Text>
          </View>
          <View style={[styles.button, styles.button3]}>
            <Text style={styles.buttonText}>정보대 소식 확인하기</Text>
          </View>
        </View>
      </View>

      {/* 하단 네비게이션 바 */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navText}>자소서</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
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
  topSection: {
    flex: 1,
    backgroundColor: '#B1B1B1',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: 40,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  pointText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  heart: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: -20,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  middleSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    color: '#9B9B9B',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '10%',
  },
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#9D9D9D',
  },
  button1: {
    backgroundColor: 'rgba(133, 186, 255, 0.31)',
  },
  button2: {
    backgroundColor: 'rgba(150, 243, 187, 0.26)',
  },
  button3: {
    backgroundColor: 'rgba(255, 177, 177, 0.3)',
  },
  buttonText: {
    fontSize: 12,
    color: '#000000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
  },
  navText: {
    fontSize: 12,
    color: '#000000',
  },
});

export default MainScreen;
