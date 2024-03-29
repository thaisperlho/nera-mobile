import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import profileIcon from '../assets/profileIcon.png'; // Importe o ícone para Teacher Profile
import classroomIcon from '../assets/classroomIcon.png'; // Importe o ícone para Teacher Classroom

const BottomMenuTeacher = () => {
    const navigation = useNavigation(); // Obtenha o objeto de navegação usando o hook useNavigation

    const goToTeacherProfile = () => {
        navigation.navigate('TeacherProfile');
    };

    const goToTeacherClassroom = () => {
        navigation.navigate('TeacherClassroom');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToTeacherClassroom}>
                <Image source={classroomIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherProfile}>
                <Image source={profileIcon} style={styles.icon} />
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
    },

    icon: {
        width: 28,
        height: 30,
        tintColor: '#135794', 
    },
});

export default BottomMenuTeacher;
