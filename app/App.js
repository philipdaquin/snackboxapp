import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Navigation from './Navigation/Navigation';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator
          screenOptions={{
              cardStyle: {
                  backgroundColor: '#00000'
              }
          }}
        >
          <Stack.Screen name ="Home" component={HomeScreen}/>
        {/* <Navigation /> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>

  );
}

