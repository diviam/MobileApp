import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomePage from './src/screens/HomePage';
import MainPage from './src/screens/MainPage';
import { Text } from 'react-native';
import StartScreen from './src/screens/timers/startTimer';
import TimerComponent from './src/screens/timers/stopTimer';
import { Camera } from './src/screens/QrScannerNew';
import { Login } from './src/screens/login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#317773',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />

        <Stack.Screen name="camera" component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name="startTimer" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="stopTimer" component={TimerComponent} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
