// import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// // Import your screens
import HomePage from './src/screens/HomePage';
import MainPage from './src/screens/MainPage';
import QRScannerScreen from './src/screens/QRScannerScreen';
import { Text } from 'react-native';
// // import QRScanner from './screens/QRScanner';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
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
        <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
