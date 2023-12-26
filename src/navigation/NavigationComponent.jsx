import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../components/loginScreen/LoginScreen';
import { EnterSmsScreen } from '../components/SMSScreen/EnterSmsScreen';
import { RegistrationScreen } from '../components/RegistrationScreen/RegistrationScreen';
import Dashbord from '../components/Dashbord/Dashbord';
import Launch from '../components/LaunchSreen/Launch';
import { useSelector } from 'react-redux';

function Navigation() {

  const isAuth = useSelector(state=>state.user.isAuth)

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        {isAuth ? (
        <Stack.Group screenOptions={{headerShown: false }} >
        <Stack.Screen name="Dashbord" component={Dashbord} />
        </Stack.Group>
        ):(
        <Stack.Group screenOptions={{headerShown: false }}  >
        <Stack.Screen name="LauncheScreen" component={Launch}  /> 
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name='RegistrationScreen' component={RegistrationScreen}  /> 
        <Stack.Screen name="EnterSmsScreen" component={EnterSmsScreen}  />
        </Stack.Group>
        )}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
