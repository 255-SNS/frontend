import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 추가

const EventDetailScreen = ({ route }) => {
  const { post } = route.params;
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  return (
    <ScrollView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.department}>{post.department}</Text>
        <Text style={styles.title}>{post.name}</Text>
        <Text style={styles.timestamp}>
          {post.created_at} | {post.updated_at}
        </Text>
      </View>

      {/* 이미지 */}
      <View style={styles.imageContainer}>
        <Image source={post.image} style={styles.image} />
      </View>

      {/* 세부 내용 */}
      <View style={styles.divider} /> {/* 구분선 추가 */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.sectionTitle}>📍 신청 기간</Text>
          <Text style={styles.sectionContent}>
            {post.start_date || '미정'} ~ {post.end_date || '미정'}
          </Text>
        </View>

        <View style={styles.divider} /> {/* 구분선 추가 */}

        <View style={styles.detailRow}>
          <Text style={styles.sectionTitle}>📍 상세 내용</Text>
          <Text style={styles.sectionContent}>{post.description}</Text>
        </View>
        <View style={styles.divider} /> {/* 구분선 추가 */}
      </View>

      {/* 신청 버튼 */}
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => navigation.navigate('EventComplete')} // 'EventCompleteScreen'으로 이동
      >
        <Text style={styles.applyButtonText}>신청하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
  },
  department: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailRow: {
    marginTop: 5,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 5,
  }, // 구분선 스타일
  applyButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  applyButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default EventDetailScreen;
