import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Navigation from './Navigation/Navigation';
import RestaurantProfile from './screens/RestaurantProfile';
import FoodScreen from './screens/FoodScreen';
import BottomTab from './Navigation/BottomTab';
import { Provider } from 'react-redux';
import store from './store';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style='auto'/>
          <TailwindProvider>

            <Navigation />
          </TailwindProvider>
      </Provider>
    </NavigationContainer>

  );
}

