import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack"
import { Store } from "./store/store.js";

import LoadingScreen from './components/screens/LoadingScreen';
import WelcomeScreen from './components/screens/WelcomeScreen';
import OrderScreen from './components/screens/OrderScreen';



const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoadingScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='LoadingScreen'
        component={LoadingScreen}
      />
      <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
      />
      <Stack.Screen
        name='OrderScreen'
        component={OrderScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false
        }}
      // options={{
      //   // headerStatusBarHeight: 150,
      //   headerTintColor: "white",
      //   headerTitle: "Right From Oven",
      //   headerBackground: () =>
      //     <ImageBackground
      //       // style={StyleSheet.absoluteFill}
      //       style={{ height: 100 }}
      //       source={require("./assets/images/restaurant.png")}
      //     />
      // }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <>
      <Provider store={Store}>
        {/* <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}> */}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <StatusBar />
      </Provider>
    </>
  );
};


export default App;
