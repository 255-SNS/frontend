import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CoffeeDrawScreen = () => {
  const points = 225;

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
        <Image
          source={require('./img/gift_box.png')}
          style={styles.giftBoxImage}
        />
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
    width: 180, // 크기 증가
    height: 180,
  },
  buttonContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2, // Android 그림자
    shadowColor: '#000', // iOS 그림자
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
