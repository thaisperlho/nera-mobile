import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import profileIcon from '../assets/profileIcon.png'; // Importe o ícone para Teacher Profile
import classroomIcon from '../assets/classroomIcon.png'; // Importe o ícone para Teacher Classroom
import homeIcon from '../assets/home.png'; // Importe o ícone para Home

const BottomMenuTeacher = () => {
    const navigation = useNavigation();

    const goToTeacherProfile = () => {
        navigation.navigate('TeacherProfile');
    };

    const goToTeacherClassroom = () => {
        navigation.navigate('TeacherClassroom');
    };

    const goToHome = () => {
        navigation.navigate('Home');
    };

    const getIconStyle = (routeName) => {
        // Verifica se a rota atual é a mesma que a rota do ícone e retorna o estilo correspondente
        return {
            ...styles.icon,
            tintColor: navigation.getState().routes[navigation.getState().index].name === routeName ? '#F20574' : '#135794',
        };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToHome}>
                <Image source={homeIcon} style={getIconStyle('Home')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherClassroom}>
                <Image source={classroomIcon} style={getIconStyle('TeacherClassroom')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherProfile}>
                <Image source={profileIcon} style={getIconStyle('TeacherProfile')} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    button: {
        alignItems: 'center',
    },

    icon: {
        width: 28,
        height: 30,
    },
});

export default BottomMenuTeacher;
