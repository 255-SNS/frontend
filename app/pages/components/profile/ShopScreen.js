import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

const ShopScreen = () => {
  const [myItems, setMyItems] = useState({
    water: 50,
    beans: 30,
    milk: 1,
    peach: 3,
  });

  const items = [
    { id: '1', name: '아메리카노', image: require('./img/americano.png'), requirements: { water: 10, beans: 5 } },
    { id: '2', name: '라떼', image: require('./img/latte.png'), requirements: { water: 10, beans: 5, milk: 2 } },
    { id: '3', name: '복숭아 아이스티', image: require('./img/peach.png'), requirements: { water: 15, peach: 3 } },
  ];

  const handlePurchase = (item) => {
    const { requirements } = item;
    const canBuy =
      (myItems.water >= (requirements.water || 0)) &&
      (myItems.beans >= (requirements.beans || 0)) &&
      (myItems.milk >= (requirements.milk || 0)) &&
      (myItems.peach >= (requirements.peach || 0));

    if (!canBuy) {
      Alert.alert('구매 불가', '재료가 부족합니다.');
      return;
    }

    // 재료 차감
    const updatedItems = {
      water: myItems.water - (requirements.water || 0),
      beans: myItems.beans - (requirements.beans || 0),
      milk: myItems.milk - (requirements.milk || 0),
      peach: myItems.peach - (requirements.peach || 0),
    };
    setMyItems(updatedItems);

    Alert.alert('구매 완료', `${item.name}을(를) 구매했습니다.`);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handlePurchase(item)}
      >
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemRequirements}>
            {item.requirements.water ? `💧 ${item.requirements.water} ` : ''}
            {item.requirements.beans ? `🌰 ${item.requirements.beans} ` : ''}
            {item.requirements.milk ? `🥛 ${item.requirements.milk} ` : ''}
            {item.requirements.peach ? `🍑 ${item.requirements.peach}` : ''}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* My Items */}
      <View style={styles.myItemsContainer}>
        <Text style={styles.myItemsTitle}>My item</Text>
        <View style={styles.myItemsRow}>
          <Text style={styles.myItem}>💧 {myItems.water}</Text>
          <Text style={styles.myItem}>🌰 {myItems.beans}</Text>
          <Text style={styles.myItem}>🥛 {myItems.milk}</Text>
          <Text style={styles.myItem}>🍑 {myItems.peach}</Text>
        </View>
      </View>

      {/* Items List */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  myItemsContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  myItemsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  myItemsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  myItem: {
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  itemTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemRequirements: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ShopScreen;
