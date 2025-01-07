import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';

const CoffeeDrawScreen = () => {
  const [points, setPoints] = useState(225);
  const [shakeAnimation] = useState(new Animated.Value(0));

  const ingredients = ['💧 물', '🌰 원두', '🥛 우유', '🍑 복숭아', '🫙 시럽'];

  const handleGiftBoxClick = () => {
    if (points < 100) {
      Alert.alert('포인트 부족', '포인트가 부족합니다.');
      return;
    }

    // 선물 상자 흔들림 애니메이션
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 랜덤 재료 뽑기
      const randomItem =
        ingredients[Math.floor(Math.random() * ingredients.length)];

      // 포인트 차감 및 팝업 표시
      setPoints((prevPoints) => prevPoints - 100);
      Alert.alert('축하합니다!', `${randomItem} 이(가) 뽑혔습니다!`);
    });
  };

  const giftBoxStyle = {
    transform: [
      {
        translateX: shakeAnimation,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointSection}>
        <Text style={styles.pointTitle}>My Point : {points}p</Text>
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>선물 상자에는 뭐가 들어있을까요?</Text>
        <View style={styles.separator} />
        <View style={styles.emojiRow}>
          <Text style={styles.emoji}>💧</Text>
          <Text style={styles.emoji}>🌰</Text>
          <Text style={styles.emoji}>🥛</Text>
          <Text style={styles.emoji}>🍑</Text>
          <Text style={styles.emoji}>🫙</Text>
        </View>
      </View>

      <View style={styles.giftBoxContainer}>
        <Animated.View style={giftBoxStyle}>
          <TouchableOpacity onPress={handleGiftBoxClick}>
            <Image
              source={require('./img/gift_box.png')}
              style={styles.giftBoxImage}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>나의 상품목록 확인하기</Text>
          <Text style={styles.arrow}>〉</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.listItem}>
          <Text style={styles.listItemText}>혜택 보기</Text>
          <Text style={styles.arrow}>〉</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  pointSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pointTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  questionBox: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 10,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  emoji: {
    fontSize: 22,
  },
  giftBoxContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  giftBoxImage: {
    width: 180,
    height: 180,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 16,
    color: '#999',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 15,
  },
});

export default CoffeeDrawScreen;
