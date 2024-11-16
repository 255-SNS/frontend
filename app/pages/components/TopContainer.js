import React from 'react';
import { View, Text, StyleSheet, Animated, Image, ImageBackground } from 'react-native';

const TopContainer = ({ pointText, animatedColor, characterImage }) => {
  return (
    <ImageBackground source={require('../../assets/img/background.png')} style={styles.topContainer}>
      <Text style={styles.pointText}>{pointText}</Text>
      <Animated.View style={[styles.heart, { backgroundColor: animatedColor }]} />
      <Image source={characterImage} style={styles.characterImage} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pointText: {
    fontSize: 16,
    color: '#FFFFFF',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  heart: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
});

export default TopContainer;
