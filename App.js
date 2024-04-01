import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import TeacherClassroom from './components/TeacherClassroom';
import TeacherProfile from './components/TeacherProfile';
import CreateClass from './components/CreateClass';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" headerMode="none">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TeacherClassroom" component={TeacherClassroom} />
                <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
                <Stack.Screen name="CreateClass" component={CreateClass} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
