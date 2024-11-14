import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import MainScreen from './components/MainScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Login' | 'Signup' | 'Main'>('Home');

  const navigateToLogin = () => {
    setCurrentScreen('Login');
  };

  const navigateToSignup = () => {
    setCurrentScreen('Signup');
  };

  const navigateToMain = () => {
    setCurrentScreen('Main');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && <HomeScreen onNavigateToLogin={navigateToLogin} />}
      {currentScreen === 'Login' && <LoginScreen onNavigateMain={navigateToMain} onNavigateToSignup={navigateToSignup} />}
      {currentScreen === 'Signup' && <SignupScreen />}
      {currentScreen === 'Main' && <MainScreen/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
