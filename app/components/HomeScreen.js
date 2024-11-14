import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ onNavigateToLogin }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onNavigateToLogin}>
      <Image source={require('../assets/img/logo.png')} style={styles.logo} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default HomeScreen;
