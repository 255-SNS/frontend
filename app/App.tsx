// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import MainScreen from './pages/MainScreen';
import BoardListScreen from './pages/BoardListScreen';
import FreeBoardScreen from './pages/boardpages/FreeBoardScreen';
import GraduateScreen from './pages/boardpages/GraduateScreen';
import JobScreen from './pages/boardpages/JobScreen';
import TaxiScreen from './pages/boardpages/TaxiScreen';
import BookstoreScreen from './pages/boardpages/BookstoreScreen';
import ProfileScreen from './pages/ProfileScreen';
import InfoBoardScreen from './pages/components/info_event/InfoBoardScreen';
import EventCreateScreen from './pages/components/info_event/EventCreateScreen';
import EventDetailScreen from './pages/components/info_event/EventDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="BoardList" component={BoardListScreen} />
          <Stack.Screen name="FreeBoard" component={FreeBoardScreen} options={{ title: '자유 게시판' }} />
          <Stack.Screen name="GraduateBoard" component={GraduateScreen} options={{ title: '졸업생 게시판' }} />
          <Stack.Screen name="JobBoard" component={JobScreen} options={{ title: '취업 게시판' }} />
          <Stack.Screen name="TaxiBoard" component={TaxiScreen} options={{ title: 'Taxi Blurr' }} />
          <Stack.Screen name="BookstoreBoard" component={BookstoreScreen} options={{ title: '서점' }} />
          <Stack.Screen name="InfoBoard" component={InfoBoardScreen} options={{ title: '정보대 소식 확인하기' }}/>
          <Stack.Screen name="EventCreate" component={EventCreateScreen} options={{ title: '이벤트 작성' }} />
          <Stack.Screen name="EventDetail" component={EventDetailScreen} options={{ title: '이벤트' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
