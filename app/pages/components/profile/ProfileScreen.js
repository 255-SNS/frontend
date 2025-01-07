import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import BottomNav from '../BottomNav'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const color = 'green'; // 'red', 'green', 'blue'
  const department = '정보통신공학과';
  const navigation = useNavigation();

  const getTagStyle = () => {
    switch (color) {
      case 'red':
        return { color: '#FF0000', borderColor: '#FF0000' };
      case 'green':
        return { color: '#00AA00', borderColor: '#00AA00' };
      case 'blue':
        return { color: '#0000FF', borderColor: '#0000FF' };
      default:
        return { color: '#FF0000', borderColor: '#FF0000' };
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 프로필 정보 */}
        <View style={styles.header}>
          <Image
            source={require('./img/profile_icon.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.profileName}>김이오</Text>
              <View style={[styles.colorTag, { borderColor: getTagStyle().borderColor }]}>
                <Text style={[styles.colorTagText, { color: getTagStyle().color }]}>{color.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.department}>{department}</Text>
          </View>
        </View>

        {/* 포인트 정보 */}
        <View style={styles.pointSection}>
          <Text style={styles.pointTitle}>My point</Text>
          <Text style={styles.pointValue}>255</Text>
        </View>
        <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('CoffeeDrawScreen')} // CoffeeDrawScreen으로 이동
        >
            <Image
              source={require('./img/dice_icon.png')}
              style={styles.diceImage}
            />
            <Text style={styles.actionButtonText}>커피 뽑으러 가기</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.actionButton}
           onPress={() => navigation.navigate('ShopScreen')} // ShopScreen으로 이동
            >
            <Image
              source={require('./img/shop_icon.png')}
              style={styles.shopImage}
            />
            <Text style={styles.actionButtonText}>Shop</Text>
          </TouchableOpacity>
        </View>

        {/* 광고 배너 */}
        <View style={[styles.banner, styles.bannerWithMargin]}>
          <Text style={styles.bannerText}>광고 배너</Text>
        </View>

        {/* 활동 내역 */}
        <View style={styles.activitySection}>
          <TouchableOpacity style={styles.activityItem}>
            <Text style={styles.activityText}>내 게시글 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityItem}>
            <Text style={styles.activityText}>내 댓글 보기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.activityItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.activityText}>이벤트 신청 내역 확인하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomNavContainer}>
        <BottomNav />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  colorTag: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 0.5,
    alignSelf: 'flex-start',
  },
  colorTagText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  department: {
    fontSize: 16,
    color: '#777777',
  },
  pointSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    marginTop: 5, // 위치를 위로 조정
    alignItems: 'center',
  },
  pointTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  pointValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  diceImage: {
    width: 40, // 아이콘 크기 조정
    height: 30,
    marginBottom: 8,
  },
  shopImage: {
    width: 30, // 아이콘 크기 조정
    height: 30,
    marginBottom: 8,
  },
  actionButtonText: {
    fontSize: 14, // 텍스트 크기 조정
    fontWeight: 'bold',
    color: '#000000',
  },
  banner: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bannerWithMargin: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  bannerText: {
    fontSize: 16,
    color: '#333333',
  },
  activitySection: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 5,
  },
  activityItem: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    padding: 15,
  },
  activityText: {
    fontSize: 16,
    color: '#333333',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
  },
});

export default ProfileScreen;
