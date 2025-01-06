import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventCompleteScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* 본문 */}
      <View style={styles.content}>
        <Text style={styles.successText}>신청 완료!</Text>
        <Image
          source={require('./img/zero(1).png')} // 가운데 웃는 이미지 경로
          style={styles.successImage}
        />
        <Text style={styles.orderText}>
          10번째로 신청이 완료되었습니다.
        </Text>
        <Text style={styles.infoText}>
          신청 내역은 [내 프로필]에서 확인할 수 있습니다!
        </Text>
      </View>

      {/* 완료 버튼 */}
      <TouchableOpacity
        style={styles.completeButton}
        onPress={() => navigation.navigate('Main')} // 메인 화면으로 이동
      >
        <Text style={styles.completeButtonText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  successImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  orderText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#777',
  },
  completeButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 30,
  },
  completeButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default EventCompleteScreen;
