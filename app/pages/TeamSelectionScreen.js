import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeamSelectionScreen = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [finalTeam, setFinalTeam] = useState(null);
  const colors = ['#FF5733', '#3498DB', '#27AE60']; // Red, Blue, Green
  const teamNames = ['RED', 'BLUE', 'GREEN'];
  const navigation = useNavigation();

  const animatedColor = new Animated.Value(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 300); // 색상이 0.5초 간격으로 전환

    setTimeout(() => {
      clearInterval(interval);
      setFinalTeam(2); // GREEN 팀으로 고정
    }, 4000); // 4초 동안 애니메이션 후 GREEN 고정

    setTimeout(() => {
      navigation.navigate('Main'); // 메인 화면으로 이동
    }, 6000); // 2초 후 메인 화면으로 이동

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.timing(animatedColor, {
      toValue: colorIndex,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [colorIndex]);

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: colors[finalTeam !== null ? finalTeam : colorIndex] },
      ]}
    >
      <Text style={styles.text}>
        {finalTeam !== null
          ? `당신의 팀은 ${teamNames[finalTeam]} 입니다!`
          : '팀이 선택되고 있습니다...'}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default TeamSelectionScreen;
