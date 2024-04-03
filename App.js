import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeTeacher from './src/screens/HomeTeacher';
import TeacherClassroom from './src/screens/TeacherClassroom';
import TeacherProfile from './src/screens/TeacherProfile';
import LoginScreen from './src/screens/LoginScreen';
import StudentProfile from './src/screens/StudentProfile';
import CreateClass from './src/components/CreateClass';
import RegisterTeacher from './src/screens/RegisterTeacher';
import StudentTrails from './src/screens/StudentTrails';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
                <Stack.Screen name="TeacherClassroom" component={TeacherClassroom} />
                <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
                <Stack.Screen name="CreateClass" component={CreateClass} />
                <Stack.Screen name="StudentProfile" component={StudentProfile} />
                <Stack.Screen name="RegisterTeacher" component={RegisterTeacher} />
                <Stack.Screen name="StudentTrails" component={StudentTrails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
