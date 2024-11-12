/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native';

// HomeScreen 컴포넌트
const HomeScreen = ({ onNavigateToLogin }: { onNavigateToLogin: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onNavigateToLogin}>
      <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" />
    </TouchableOpacity>
  );
};

// LoginScreen 컴포넌트
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <TextInput placeholder="email" style={styles.input} />
      <TextInput placeholder="password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Login'>('Home');

  const navigateToLogin = () => {
    setCurrentScreen('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Home' ? (
        <HomeScreen onNavigateToLogin={navigateToLogin} />
      ) : (
        <LoginScreen />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default App; 