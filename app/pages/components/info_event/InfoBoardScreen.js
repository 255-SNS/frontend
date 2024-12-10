import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoBoardScreen = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('전체');

  const [posts, setPosts] = useState([
    {
      event_id: '1',
      name: '정보기술대 제휴를 소개합니다!',
      department: '전체',
      description: '정보기술대와 제휴 관련한 모든 정보를 확인하세요.',
      start_date: '',
      end_date: '',
      is_first: false,
      max: null,
      created_at: '2024-11-19 10:00:00',
      updated_at: '2024-11-19 10:00:00',
      is_deleted: false,
      image: require('./img/event1.jpeg'),
      remaining_days: '기간 없음',
    },
    {
      event_id: '2',
      name: '정보통신공학과 간식 나눔',
      department: '정보통신공학과',
      description: '즐겁게 참여하고 간식을 받아가세요!',
      start_date: '2024-11-20',
      end_date: '2024-11-21',
      is_first: true,
      max: 50,
      created_at: '2024-11-18 15:00:00',
      updated_at: '2024-11-19 09:00:00',
      is_deleted: false,
      image: require('./img/event2.jpeg'),
      remaining_days: '1일 남음',
    },
    {
      event_id: '3',
      name: 'LUCKYTHON',
      department: '임베디드공학과',
      description: '럭키톤 대회 참가 신청을 서두르세요!',
      start_date: '2024-11-25',
      end_date: '2024-11-30',
      is_first: false,
      max: 100,
      created_at: '2024-11-17 12:00:00',
      updated_at: '2024-11-19 10:30:00',
      is_deleted: false,
      image: require('./img/event3.jpeg'),
      remaining_days: '5일 남음',
    },
  ]);

  const navigation = useNavigation();

  const filteredPosts = selectedDepartment === '전체'
    ? posts
    : posts.filter((post) => post.department === selectedDepartment);

  return (
    <View style={styles.container}>
      {/* 필터링 버튼 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {['전체', '정보통신공학과', '임베디드공학과', '컴퓨터공학과'].map((department) => (
          <TouchableOpacity
            key={department}
            style={[
              styles.filterButton,
              selectedDepartment === department && styles.selectedFilterButton,
            ]}
            onPress={() => setSelectedDepartment(department)}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedDepartment === department && styles.selectedFilterButtonText,
              ]}
            >
              {department}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 소식 리스트 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredPosts.map((post) => (
          <TouchableOpacity
            key={post.event_id}
            style={styles.newsCard}
            onPress={() => navigation.navigate('EventDetail', { post })}
          >
            <Image source={post.image} style={styles.newsImage} />
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{post.remaining_days}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 작성 버튼 */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('EventCreate')}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  filterContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    position: 'absolute', // 고정 위치로 설정
    top: 0,               // 상단에 고정
    width: '100%',        // 화면 전체 넓이
    zIndex: 10,    
  },
  filterButton: {
    width: 100, // 고정된 너비 설정
    height: 40, // 고정된 높이 설정
    justifyContent: 'center', // 버튼 내부 텍스트 정렬
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#000000',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#777',
  },
  selectedFilterButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingTop: 60, // 필터가 고정된 높이만큼 아래로 패딩 추가
    paddingHorizontal: 15,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  tagContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 14,
    color: '#FFF',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#000000',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  floatingButtonText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default InfoBoardScreen;

