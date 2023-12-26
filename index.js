// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// // import { Provider } from 'react-redux';
// import { LoginScreen } from './src/components/loginScreen/LoginScreen';
// import { EnterSmsScreen } from './src/components/SMSScreen/EnterSmsScreen';
// import Dashbord from './src/components/Dashbord/Dashbord';
// // import { store } from './src/store';
// // import store from './src/store';

// function MyApp() {
//   const Stack = createNativeStackNavigator();
//   return (
//   // <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="EnterSmsScreen" component={EnterSmsScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Dashbord" component={Dashbord} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   // </Provider>
//   );
// }

// export default MyApp;


// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import messaging from '@react-native-firebase/messaging';

// // Register background handler
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('Message handled in the background!', remoteMessage);
// });

// AppRegistry.registerComponent(appName, () => App);