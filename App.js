import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import TeacherClassroom from './src/screens/TeacherClassroom';
import TeacherProfile from './src/screens/TeacherProfile';
import LoginScreen from './src/screens/LoginScreen';
import CreateClass from './src/components/CreateClass';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" headerMode="none">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TeacherClassroom" component={TeacherClassroom} />
                <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
                <Stack.Screen name="CreateClass" component={CreateClass} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

